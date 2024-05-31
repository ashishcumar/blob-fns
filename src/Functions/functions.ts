const createAndDownloadBlob = (
  data: any,
  fileName: string,
  mimeType: string
): void => {
  if (!data || !fileName || !mimeType) {
    throw new Error(
      "data, fileName, and mimeType are required for createAndDownloadBlob"
    );
  }
  console.log("createAndDownloadBlob -->", { data, fileName, mimeType });
  const blob = new Blob([data], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

const fetchAndDownloadBlob = async (
  url: string,
  fileName: string,
  mimeType: string
): Promise<void> => {
  if (!url || !fileName || !mimeType) {
    throw new Error(
      "url, fileName, and mimeType are required for fetchAndDownloadBlob"
    );
  }
  fileName = fileName.replaceAll('.','')
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }

  const blob = await response.blob();

  const a = document.createElement("a");
  const urls = URL.createObjectURL(blob);

  a.href = urls;
  a.download = fileName;
  a.type = mimeType;

  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(urls);
};

const blobToBase64 = (blob: Blob): Promise<string | ArrayBuffer | null> => {
  if (!blob) throw new Error("blob is required for blobToBase64");
  if (!(blob instanceof Blob)) throw new Error("blob must be a Blob instance");
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

const base64ToBlob = (base64: string, mimeType: string): Blob => {
  if (!base64) throw new Error("base64 is required for base64ToBlob");
  if (!mimeType) throw new Error("mimeType is required for base64ToBlob");
  if (!base64.startsWith("data:")) {
    throw new Error("base64 must start with 'data:'");
  }

  const byteCharacters = atob(base64.split(",")[1]);
  const byteNumbers = new Uint8Array(
    new Array(byteCharacters.length)
      .fill(0)
      .map((_, i) => byteCharacters.charCodeAt(i))
  );
  return new Blob([byteNumbers], { type: mimeType });
};

interface BlobMetadata {
  size: number;
  type: string;
  lastModified: number;
}

const getBlobMetadata = (blob: Blob): BlobMetadata => {
  if (!(blob instanceof Blob)) throw new Error("blob must be a Blob instance");
  return {
    size: blob.size,
    type: blob.type,
    lastModified: (blob as any).lastModified || Date.now(), // Blobs don't have a lastModified property; this is just a placeholder.
  };
};

const compressBlob = async (
  blob: Blob,
  quality: number = 0.7
): Promise<Blob | null> => {
  if (!blob.type.startsWith("image/")) {
    throw new Error("Can only compress image blobs.");
  }

  const imageBitmap = await createImageBitmap(blob);
  const canvas = document.createElement("canvas");
  canvas.width = imageBitmap.width;
  canvas.height = imageBitmap.height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Failed to get canvas 2D context");
  ctx.drawImage(imageBitmap, 0, 0);

  return new Promise((resolve) => {
    canvas.toBlob(resolve, blob.type, quality);
  });
};

const createTextBlob = (text: string): Blob => {
  if (!text) throw new Error("text is required for createTextBlob");
  if (typeof text !== "string") throw new Error("text must be a string");
  return new Blob([text], { type: "text/plain" });
};

const createJSONBlob = (jsonObject: object): Blob => {
  if (!jsonObject) throw new Error("jsonObject is required for createJSONBlob");
  if (typeof jsonObject !== "object")
    throw new Error("jsonObject must be an object");
  const jsonString = JSON.stringify(jsonObject);
  return new Blob([jsonString], { type: "application/json" });
};

const createImageBlob = (base64Image: string): Blob => {
  if (!base64Image)
    throw new Error("base64Image is required for createImageBlob");
  if (!base64Image.startsWith("data:image/")) {
    throw new Error("base64Image must start with 'data:image/'");
  }

  const byteCharacters = atob(base64Image.split(",")[1]);
  const byteNumbers = new Uint8Array(
    new Array(byteCharacters.length)
      .fill(0)
      .map((_, i) => byteCharacters.charCodeAt(i))
  );
  return new Blob([byteNumbers], { type: "image/png" });
};

const createBinaryBlob = (dataArray: Array<number>): Blob => {
  if (!dataArray) throw new Error("dataArray is required for createBinaryBlob");
  if (!Array.isArray(dataArray)) throw new Error("dataArray must be an array");
  const byteArray = new Uint8Array(dataArray);
  return new Blob([byteArray], { type: "application/octet-stream" });
};

function blobToText(blob: Blob): Promise<string> {
  if (!(blob instanceof Blob)) throw new Error("blob must be a Blob instance");
  if (!blob.type.startsWith("text/")) {
    throw new Error("blob must be a text blob");
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsText(blob);
  });
}

async function blobToJSON<T = any>(blob: Blob): Promise<T> {
  if (!(blob instanceof Blob)) throw new Error("blob must be a Blob instance");
  if (!blob.type.startsWith("application/json")) {
    throw new Error("blob must be a JSON blob");
  }

  const text = await blobToText(blob);
  return JSON.parse(text) as T;
}

function blobToImage(blob: Blob): Promise<string> {
  if (!(blob instanceof Blob)) throw new Error("blob must be a Blob instance");
  if (!blob.type.startsWith("image/")) {
    throw new Error("blob must be an image blob");
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

export {
  createAndDownloadBlob,
  fetchAndDownloadBlob,
  blobToBase64,
  base64ToBlob,
  getBlobMetadata,
  compressBlob,
  createTextBlob,
  createJSONBlob,
  createImageBlob,
  createBinaryBlob,
  blobToJSON,
  blobToImage,
  blobToText,
};
