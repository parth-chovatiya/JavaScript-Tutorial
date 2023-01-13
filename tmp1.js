const mydata = [
  {
    id: "123",
    url: "urn:li:image:D4D34AQFGTJHrpgu5cA",
  },
  {
    id: "1234",
    url: "urn:li:image:D4D34AQGeQBNTPsvOBA",
  },
  {
    id: "234",
    url: "urn:li:image:D4D34AQFj1_1Y-aTc6A",
  },
  {
    id: "45",
    url: "urn:li:image:D4D34AQHE8b0PrSmiEw",
  },
  {
    id: "456",
    url: "urn:li:image:C4D22AQE5tj5E7BEWYg",
  },
  {
    id: "789",
    url: "urn:li:image:D4D34AQGvCNdLinbIMw",
  },
  {
    id: "5656",
    url: "urn:li:image:C4D22AQFk565_69plRQ",
  },
  {
    id: "5657",
    url: "urn:li:image:C4r32D22AQFk565_69plRQ",
  },
];

const res = {
  results: {
    "urn:li:image:D4D34AQFGTJHrpgu5cA": {
      downloadUrl:
        "https://media.licdn.com/dms/image/D4D34AQFGTJHrpgu5cA/ugc-proxy-shrink_480/0/1672805589178?e=1673938800&v=beta&t=MFYZZpBP5XZYrzeJgJ-pwsg1bFEkKEQ8Qu0SzN8gpnU",
      owner: "urn:li:organization:65891887",
      id: "urn:li:image:D4D34AQFGTJHrpgu5cA",
      downloadUrlExpiresAt: 1673938800000,
      status: "AVAILABLE",
    },
    "urn:li:image:D4D34AQGeQBNTPsvOBA": {
      downloadUrl:
        "https://media.licdn.com/dms/image/D4D34AQGeQBNTPsvOBA/ugc-proxy-shrink_480/0/1672800548179?e=1673938800&v=beta&t=jsJHkzXTfqWuUV4qtNjBv128oLy-w4irzUHBhALgs2Q",
      owner: "urn:li:organization:65891887",
      id: "urn:li:image:D4D34AQGeQBNTPsvOBA",
      downloadUrlExpiresAt: 1673938800000,
      status: "AVAILABLE",
    },
    "urn:li:image:D4D34AQFj1_1Y-aTc6A": {
      downloadUrl:
        "https://media.licdn.com/dms/image/D4D34AQFj1_1Y-aTc6A/ugc-proxy-shrink_1280_800/0/1672886948926?e=1673938800&v=beta&t=6xzz5om2S29-5AnZhmi1I10S3DL3sDM0rF23-b8yj4c",
      owner: "urn:li:organization:65891887",
      id: "urn:li:image:D4D34AQFj1_1Y-aTc6A",
      downloadUrlExpiresAt: 1673938800000,
      status: "AVAILABLE",
    },
    "urn:li:image:D4D34AQHE8b0PrSmiEw": {
      downloadUrl:
        "https://media.licdn.com/dms/image/D4D34AQHE8b0PrSmiEw/ugc-proxy-shrink_1280_800/0/1672802657661?e=1673938800&v=beta&t=zfWlyraiMSVkDxD9CARi7CJlPiUdnD46-yHqDc1dAAQ",
      owner: "urn:li:organization:65891887",
      id: "urn:li:image:D4D34AQHE8b0PrSmiEw",
      downloadUrlExpiresAt: 1673938800000,
      status: "AVAILABLE",
    },
    "urn:li:image:C4D22AQE5tj5E7BEWYg": {
      downloadUrl:
        "https://media.licdn.com/dms/image/C4D22AQE5tj5E7BEWYg/feedshare-shrink_2048_1536/0/1672812007399?e=1676505600&v=beta&t=y3ibylqnJQp97gwW1zjN9G0vXGcfE_Dk1gh0-S8_JcE",
      owner: "urn:li:organization:65891887",
      id: "urn:li:image:C4D22AQE5tj5E7BEWYg",
      downloadUrlExpiresAt: 1676505600000,
      status: "AVAILABLE",
    },
    "urn:li:image:D4D34AQGvCNdLinbIMw": {
      downloadUrl:
        "https://media.licdn.com/dms/image/D4D34AQGvCNdLinbIMw/ugc-proxy-shrink_1280_800/0/1672918864982?e=1673938800&v=beta&t=vxTRDUr_c55a6RBmHvlPM66zgDY9Z0nCdUIg7npU80Y",
      owner: "urn:li:organization:65891887",
      id: "urn:li:image:D4D34AQGvCNdLinbIMw",
      downloadUrlExpiresAt: 1673938800000,
      status: "AVAILABLE",
    },
    "urn:li:image:C4D22AQFk565_69plRQ": {
      downloadUrl:
        "https://media.licdn.com/dms/image/C4D22AQFk565_69plRQ/feedshare-shrink_2048_1536/0/1672898408750?e=1676505600&v=beta&t=_-cAxKDp4qrSsT6W2beisbpJF1WciRhHU0-i6Ri2FOE",
      owner: "urn:li:organization:65891887",
      id: "urn:li:image:C4D22AQFk565_69plRQ",
      downloadUrlExpiresAt: 1676505600000,
      status: "AVAILABLE",
    },
  },
};

const data = mydata.map((ele) => {
  const x = res.results[ele.url] ?? "Unkown";

  return {
    id: ele.id,
    userId: x?.owner && 345,
    downloadURL: x?.downloadUrl ?? "",
    r_id: x?.id ?? "",
  };
});

data.sort((x, y) => (x.r_id < y.r_id ? -1 : 1));
console.log(data);

// const string = ["a", "b", "c", "x"]
// // const x = string.slice(0, 2);
// const x = string.splice(0, 2);
// console.log(x)
// // console.log(string.splice(1, 2, "fref", "ferf"))
// console.log(string)

let count = 0;

function myFunction() {
  const x = setInterval(() => {
    count++;
    console.log(count);

    if (count == 4) {
      clearInterval(x);
    }
  }, 2);
  // console.log(x)
}
myFunction();
