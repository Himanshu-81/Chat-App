import moment from "moment";

const fileFormat = (url = "") => {
  const fileExtension = url.split(".").pop();

  if (
    fileExtension === "mp4" ||
    fileExtension === "webm" ||
    fileExtension === "ogg"
  )
    return "video";

  if (fileExtension === "mp3" || fileExtension === "wav") return "audio";

  if (
    fileExtension === "png" ||
    fileExtension === "jpg" ||
    fileExtension === "jpeg" ||
    fileExtension === "gif"
  )
    return "image";

  return "file";
};

const transformImage = (url = "", width = 100) => {
  return url;
};

const getLastSevenDays = () => {
  const currentDate = moment();

  const lastSevenDays = [];

  for (let i = 0; i < 7; i++) {
    const dayDate = currentDate.clone().subtract(i, "days");
    const dayName = dayDate.format("dddd");

    lastSevenDays.unshift(dayName);
  }

  return lastSevenDays;
};

export { fileFormat, transformImage, getLastSevenDays };
