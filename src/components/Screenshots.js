import SectionTitle from "./SectionTitle";
const Screenshots = () => {
  const styles = {
    marginTop: "15px",
  };
  const screenshotStyles = {
    padding: "0.2rem",
    marginLeft: "0.5rem",
  };
  const first = {
    marginLeft: "0rem",
  };
  const screenshotURLs = [
    "https://cuckoo.cert.ee/file/screenshot/6274035377990acfcb2b09e8/nofetch/",
    "https://cuckoo.cert.ee/file/screenshot/6274035377990acfcb2b09e8/nofetch/",
    "https://cuckoo.cert.ee/file/screenshot/6274035377990acfcb2b09e8/nofetch/",
  ];

  return (
    <div>
      <div style={styles}>
        <SectionTitle title={"Screenshots"} />
      </div>
      <div>
        {screenshotURLs.map((e, index) => {
          return (
            <img
              src={e}
              key={index}
              alt={`screenshot ${index}`}
              width="250"
              style={index == 0 ? first : screenshotStyles}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Screenshots;
