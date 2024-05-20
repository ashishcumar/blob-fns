# Blob-Fns

Blob-Fns is a lightweight npm package for generating and handling small Blob objects in various formats, making it easier to work with binary data in web applications.

## 🚀 Features

The Blob Utilities package provides a variety of functions to work with Blob objects in JavaScript and TypeScript. These functions cover creating Blobs from different data types, converting Blobs to other formats, downloading Blobs as files, and compressing Blob data. The package is lightweight and easy to use.

### Functions Offered

1. **createAndDownloadBlob**: Create a Blob from data and download it as a file.
2. **fetchAndDownloadBlob**: Fetch a Blob from url and download it as a file.
3. **blobToBase64**: Convert a Blob to a Base64 string.
4. **base64ToBlob**: Convert a Base64 string to a Blob.
5. **getBlobMetadata**: Retrieve metadata (type and size) from a Blob.
6. **compressBlob**: Compress an image Blob to a specified quality.
7. **createTextBlob**: Create a Blob from a text string.
8. **createJSONBlob**: Create a Blob from a JSON object.
9. **createImageBlob**: Create a Blob from a Base64 image string.
10. **createBinaryBlob**: Create a Blob from binary data.
11. **blobToJSON**: Convert a Blob back to a JSON object.
12. **blobToImage**: Convert a Blob back to an image in Base64 format.
13. **blobToText**: Convert a Blob back to a text string.


## 💡 Use Cases

### File Downloads

Allow users to download generated or fetched data as files, such as exporting data to CSV, JSON, or generating PDFs.

### Image Manipulation

Handle image data for resizing, cropping, compressing, and converting between different image formats before displaying or uploading.

### Data Storage

Save and retrieve binary data in IndexedDB or localStorage for offline access or caching purposes.

### Media Handling

Manage audio and video blobs for media playback, recording, and manipulation.

### Clipboard Operations

Copy blobs (e.g., images, files) to the clipboard for pasting into other applications.

### Conversion Between Formats

Convert between various data formats such as ArrayBuffer, Base64, and Blob to support diverse application needs.

## 📦 Installation

Install the package using npm:

```ssh
npm install blob-fns
```

or

```ssh
yarn add blob-fns
```

## 📚 Usage

- **createAndDownloadBlob**

```typescript
import { createAndDownloadBlob } from "blob-fns";

const textBlob = new Blob(["Hello, world!"]);
// * @param {any} data - The data to be used for creating the Blob.
// * @param {string} fileName - The name of the file to be downloaded.
// * @param {string} mimeType - The MIME type of the Blob.
createAndDownloadBlob(textBlob, "hello.txt", "text/plain");
```

- **FetchAndDownloadBlob**

```typescript
import { fetchAndDownloadBlob } from "blob-fns";

// * @param {string} url - The URL from which to fetch the Blob.
// * @param {string} fileName - The name of the file to be downloaded.
// * @param {string} mimeType - The MIME type of the Blob.
fetchAndDownloadBlob('URL', "FILENAME", "MIMETYPE");
```

- **blobToBase64**

```typescript
import { blobToBase64 } from "blob-fns";

const blob = new Blob(["Hello, world!"], { type: "text/plain" });
// * @param {Blob} blob - The Blob object to convert.
blobToBase64(blob).then((base64) => {
  console.log(base64);
});
```

- **base64ToBlob**

```typescript
import { base64ToBlob } from "blob-fns";

//  * @param {string} base64 - The base64 string to convert.
//  * @param {string} mimeType - The MIME type of the Blob.
const blob = base64ToBlob("BASE64","MIMETYPE");
console.log(blob);
```

- **getBlobMetadata**

```typescript
import { getBlobMetadata } from "blob-fns";

const blob = new Blob(["Hello, world!"], { type: "text/plain" });
// * @param {Blob} blob - The Blob object to get metadata for.
const metadata = getBlobMetadata(blob);
console.log(metadata); // { type: 'text/plain', size: 13 }
```

- **compressBlob**

```typescript
import { compressBlob } from "blob-fns";

const base64Image = "data:image/png;base64,..."; // A valid Base64 string
const imageBlob = base64ToBlob(base64Image, "image/png");
//  * @param {Blob} blob - The image Blob to be compressed.
//  * @param {number} [quality=0.7] - The quality level to compress the image to.
compressBlob(imageBlob, 0.7).then((compressedBlob) => {
  console.log(compressedBlob);
});
```

- **createTextBlob**

```typescript
import { createTextBlob } from "blob-fns";
//  * @param {string} text - The text string to be converted into a Blob.
const textBlob = createTextBlob("Hello, world!");
console.log(textBlob);
```

- **createJSONBlob**

```typescript
import { createJSONBlob } from "blob-fns";

const jsonObject = { message: "Hello, world!" };
// * @param {object} jsonObject - The JSON object to be converted into a Blob.
const jsonBlob = createJSONBlob(jsonObject);
console.log(jsonBlob);
```

- **createImageBlob**

```typescript
import { createImageBlob } from "blob-fns";

const base64Image = "data:image/png;base64,..."; // A valid Base64 string
// * @param {string} base64Image - The base64 image string.
const imageBlob = createImageBlob(base64Image);
console.log(imageBlob);
```

- **createBinaryBlob**

```typescript
import { createBinaryBlob } from "blob-fns";

const binaryData = new Uint8Array([72, 101, 108, 108, 111]); // Binary representation of 'Hello'
const binaryBlob = createBinaryBlob(binaryData);
// * @param {Array<number>} dataArray - The array of numbers representing the binary data.
console.log(binaryBlob);
```

- **blobToText**

```typescript
import { blobToText } from "blob-fns";

const textBlob = createTextBlob("Hello, world!");
// * @param {Blob} blob - The Blob object to convert.
blobToText(textBlob).then((text) => {
  console.log(text); // 'Hello, world!'
});
```

- **blobToJSON**

```typescript
import { blobToJSON } from "blob-fns";

const jsonBlob = createJSONBlob({ message: "Hello, world!" });
// * @param {Blob} blob - The Blob object to be converted.
blobToJSON(jsonBlob).then((jsonObject) => {
  console.log(jsonObject); // { message: 'Hello, world!' }
});
```

- **blobToImage**

```typescript
import { blobToImage } from "blob-fns";
const base64Image = "data:image/png;base64,..."; // A valid Base64 string
//  * @param {Blob} blob - The Blob object to convert.
const imageBlob = createImageBlob(base64Image);
blobToImage(imageBlob).then((base64) => {
  console.log(base64);
});
```



## Check Out My Other Packages

Explore more useful packages by visiting [my npm profile](https://www.npmjs.com/~iashish.99). Made with ❤️ by Ashish
