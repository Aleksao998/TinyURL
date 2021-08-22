import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";

interface Props {
  setShortUrl: React.Dispatch<React.SetStateAction<string>>;
}

const ResponseCard = (props: Props): JSX.Element => {
  const { setShortUrl } = props;
  return (
    <div className="centerDiv m-t-20" style={{ width: "450px" }}>
      <Card className="card-body" variant="outlined">
        <CardContent>
          <div className="row">
            <div className="col-1">
              <img src={process.env.PUBLIC_URL + "url.svg"} alt="logo"></img>
            </div>
            <div className="col-11">
              <p style={{ fontWeight: "bold" }}>Your Long URL</p>
            </div>
          </div>

          <div className="row m-t-10">
            <TextField id="outlined-basic" variant="outlined" multiline />
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
              <p style={{ fontWeight: "bold" }}>TinyURL</p>
            </div>
          </div>

          <div className="row m-t-10">
            <TextField id="outlined-basic" variant="outlined" multiline />
          </div>

          <div className="row m-t-10">
            <div className="col-4" style={{ paddingLeft: "0px" }}>
              {" "}
              <Button variant="outlined" color="primary">
                {" "}
                Visit URl
              </Button>
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
                setShortUrl("");
              }}
            >
              Shorten another
            </Button>
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

export default ResponseCard;
