import { Request, Response } from "express";
import { nanoid } from "nanoid";
const validUrl = require("valid-url");
var crypto = require("crypto");
const Url = require("../models/url");
const UrlTrafic = require("../models/urlTrafic");
const DomainTrafic = require("../models/domainTrafic.ts");

exports.getShortUrl = async (req: Request, res: Response) => {
  const { longUrl, baseUrl } = req.body;

  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json({ message: "Invalid long URL" });
  }
  if (!validUrl.isUri(longUrl)) {
    return res.status(401).json({ message: "Invalid long URL" });
  }
  try {
    let url = await Url.findOne({
      longUrl,
    });
    if (url) {
      return res
        .status(200)
        .json({ shortUrl: url.baseUrl + "/" + url.urlCode });
    } else {
      const hash = crypto
        .createHash("md5")
        .update(longUrl + nanoid())
        .digest("hex");
      const urlCode = hash.substring(0, 8);

      url = new Url({
        longUrl: longUrl,
        urlCode: urlCode,
        baseUrl: baseUrl,
      });
      await url.save();
      return res.status(200).json({ shortUrl: baseUrl + "/" + urlCode });
    }
  } catch (err) {
    res.status(500).json("Server Error");
  }
};

exports.redirectLongUrl = async (req: Request, res: Response) => {
  try {
    const url = await Url.findOne({
      urlCode: req.params.urlCode,
    });
    if (url) {
      const urlTrafic = new UrlTrafic({
        longUrl: url.longUrl,
        urlCode: url.urlCode,
        baseUrl: url.baseUrl,
        date: new Date(),
      });
      await urlTrafic.save();
      const domain = new URL(url.longUrl);
      const domainTrafic = new DomainTrafic({
        domain: domain.hostname,
        date: Date.now(),
      });
      await domainTrafic.save();
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json("No URL Found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("Server Error");
  }
};

exports.getLongUrlData = async (req: Request, res: Response) => {
  try {
    const url = await Url.findOne({
      urlCode: req.params.urlCode,
    });
    if (url) {
      const urlTrafic = new UrlTrafic({
        longUrl: url.longUrl,
        urlCode: url.urlCode,
        baseUrl: url.baseUrl,
        date: Date.now(),
      });
      await urlTrafic.save();
      const domain = new URL(url.longUrl);
      const domainTrafic = new DomainTrafic({
        domain: domain.hostname,
        date: Date.now(),
      });
      await domainTrafic.save();
      return res.status(200).json({ longurl: url.longUrl });
    } else {
      return res.status(404).json("No URL Found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("Server Error");
  }
};

exports.visitedDomainsSorted = async (req: Request, res: Response) => {
  try {
    var start = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
    const aggregatorOptsUrl = [
      {
        $match: {
          createdAt: { $gte: start },
        },
      },
      {
        $group: {
          _id: "$longUrl",
          count: { $sum: 1 },
        },
      },
      { $sort: { count: -1 } },
    ];

    const aggregatorOptsDomain = [
      {
        $match: {
          createdAt: { $gte: start },
        },
      },
      {
        $group: {
          _id: "$domain",
          count: { $sum: 1 },
        },
      },
      { $sort: { count: -1 } },
    ];

    const urlTrafic = await UrlTrafic.aggregate(aggregatorOptsUrl).exec();
    const domainTrafic = await DomainTrafic.aggregate(
      aggregatorOptsDomain
    ).exec();
    return res
      .status(200)
      .json({ urlTrafic: urlTrafic, domainTrafic: domainTrafic });
  } catch (err) {
    console.error(err);
    res.status(500).json("Server Error");
  }
};
