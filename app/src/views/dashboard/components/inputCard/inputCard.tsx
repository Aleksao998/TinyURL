import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { BaseDomains } from "../../../../constants/baseDomains";

interface Props {
  setShortUrl: React.Dispatch<React.SetStateAction<string>>;
}

const InputCard = (props: Props): JSX.Element => {
  const { setShortUrl } = props;
  const [baseUrl, setBaseUrl] = useState("");
  const [longUrl, setLongUrl] = useState("");

  const handleSubmit = () => {
    console.log(baseUrl, longUrl);
    setShortUrl("test");
  };

  const handleChangeBaseUrl = (event: any) => {
    const { value } = event.target;
    setBaseUrl(value);
  };

  const handleChangeLongURL = (event: any) => {
    const { value } = event.target;
    setLongUrl(value);
  };

  return (
    <div className="centerDiv m-t-20" style={{ width: "450px" }}>
      <Card className="card-body" variant="outlined">
        <CardContent>
          <div className="row">
            <div className="col-1">
              <svg
                data-v-2895f6bc=""
                data-v-9cc1e486=""
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="24"
                height="24"
                className="mr-2"
              >
                <path
                  data-v-2895f6bc=""
                  d="M10.27,6.64l2.88-2.88A10,10,0,0,1,24.59,1.35a11.54,11.54,0,0,1,6.05,6.06,10,10,0,0,1-2.4,11.44l-2.88,2.89.07-6.15A5.88,5.88,0,0,0,26.71,9.1,7.48,7.48,0,0,0,22.9,5.29a5.86,5.86,0,0,0-6.48,1.28ZM3.76,13.15,6.3,10.6A3.76,3.76,0,0,0,7.38,13l1.31,1.3-1.9,1.9a5.91,5.91,0,0,0-1.5,6.71A7.48,7.48,0,0,0,9.1,26.71a5.91,5.91,0,0,0,6.71-1.5l1.91-1.91L19,24.61a3.53,3.53,0,0,0,1,.7h0a3.92,3.92,0,0,0,1.16.35l.24,0-2.55,2.55A10,10,0,0,1,7.41,30.65a11.54,11.54,0,0,1-6-6.06A10,10,0,0,1,3.76,13.15Z"
                  className="a"
                ></path>{" "}
                <path
                  data-v-2895f6bc=""
                  d="M17,19.21l-3.84,3.9c-2.5,2.54-6.7-1.89-4.27-4.35l3.83-3.9L9.22,11.3a1.07,1.07,0,0,1,0-1.5,1,1,0,0,1,.67-.31l11.35-.12a1,1,0,0,1,1.17,1.21l-.13,11.58a1,1,0,0,1-1.17.91,1.09,1.09,0,0,1-.6-.31Z"
                  className="b"
                ></path>
              </svg>
            </div>
            <div className="col-11">
              <p style={{ fontWeight: "bold" }}>
                Enter a long URL to make a TinyURL
              </p>
            </div>
          </div>

          <div className="row m-t-10">
            <TextField
              id="outlined-basic"
              variant="outlined"
              value={longUrl}
              onChange={handleChangeLongURL}
            />
          </div>

          <div className="row m-t-10">
            <div className="col-1">
              <svg
                data-v-9cc1e486=""
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M16.28 4.71973C15.987 4.42676 15.5124 4.42676 15.2194 4.71973L0.21949 19.7197C-0.0734889 20.0127 -0.0734889 20.4872 0.21949 20.7802L3.21949 23.7802C3.36595 23.9267 3.55787 23.9999 3.74978 23.9999C3.94169 23.9999 4.13356 23.9267 4.28007 23.7802L19.28 8.78027C19.573 8.48729 19.573 8.01271 19.28 7.71973L16.28 4.71973ZM3.74973 22.1894L1.81031 20.25L11.9997 10.0606L13.9392 12C13.9392 12 3.74973 22.1894 3.74973 22.1894ZM14.9997 10.9395L13.0603 8.99999L15.7497 6.31056L17.6891 8.25002L14.9997 10.9395Z"
                    fill="#424242"
                  ></path>{" "}
                  <path
                    d="M10.5 6C11.25 4.50002 12 3.75001 13.5 3C12 2.24999 11.25 1.50002 10.5 0C9.74999 1.49998 8.99992 2.24999 7.5 3C9.00002 3.75001 9.74999 4.50002 10.5 6Z"
                    fill="#424242"
                  ></path>{" "}
                  <path
                    d="M22.5 10.5C22.125 11.25 21.7499 11.625 21 12C21.75 12.375 22.125 12.75 22.5 13.5C22.875 12.7499 23.25 12.375 24 12C23.25 11.625 22.875 11.25 22.5 10.5Z"
                    fill="#424242"
                  ></path>{" "}
                  <path
                    d="M22.5 2.25096C21.375 1.68844 20.8125 1.12597 20.25 0.000976562C19.6875 1.12597 19.1249 1.68849 18 2.25096C19.125 2.81349 19.6875 3.37596 20.25 4.50095C20.8125 3.37596 21.375 2.81344 22.5 2.25096Z"
                    fill="#424242"
                  ></path>
                </g>{" "}
                <defs>
                  <clipPath id="clip0">
                    <rect width="24" height="24" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="col-11">
              <p style={{ fontWeight: "bold" }}>Customize your link</p>
            </div>
          </div>

          <div className="row m-t-10">
            <div
              className="col-12"
              style={{ paddingRight: "0px", paddingLeft: "0px" }}
            >
              <TextField
                style={{ width: "100%" }}
                select
                onChange={handleChangeBaseUrl}
                value={baseUrl}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
                {BaseDomains.map((domain: string) => (
                  <option key={domain} value={domain}>
                    {domain}
                  </option>
                ))}
              </TextField>
            </div>
          </div>
        </CardContent>
        <CardActions>
          <div style={{ width: "100%", textAlign: "center" }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#22a975",
                color: "#fff",
                borderColor: "#209e6e",
                width: "100%",
                cursor: "pointer",
                padding: "15px 30px",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
              onClick={() => {
                handleSubmit();
              }}
            >
              Make TinyURL!
            </Button>
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

export default InputCard;
