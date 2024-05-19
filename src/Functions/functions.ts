const createAndDownloadBlob = (
  data: any,
  fileName: string,
  mimeType: string
): void => {
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

const blobToBase64 = (blob: Blob): Promise<string | ArrayBuffer | null> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

const base64ToBlob = (base64: string, mimeType: string): Blob => {
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
  return new Blob([text], { type: "text/plain" });
};

const createJSONBlob = (jsonObject: object): Blob => {
  const jsonString = JSON.stringify(jsonObject);
  return new Blob([jsonString], { type: "application/json" });
};

const createImageBlob = (base64Image: string): Blob => {
  const byteCharacters = atob(base64Image.split(",")[1]);
  const byteNumbers = new Uint8Array(
    new Array(byteCharacters.length)
      .fill(0)
      .map((_, i) => byteCharacters.charCodeAt(i))
  );
  return new Blob([byteNumbers], { type: "image/png" });
};

const createBinaryBlob = (dataArray: Array<number>): Blob => {
  const byteArray = new Uint8Array(dataArray);
  return new Blob([byteArray], { type: "application/octet-stream" });
};

export {
  createAndDownloadBlob,
  blobToBase64,
  base64ToBlob,
  getBlobMetadata,
  compressBlob,
  createTextBlob,
  createJSONBlob,
  createImageBlob,
  createBinaryBlob,
};
