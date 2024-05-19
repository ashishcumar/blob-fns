# Blob-Fns

Blob-Fns is a lightweight npm package for generating and handling small Blob objects in various formats, making it easier to work with binary data in web applications.

## 🚀 Features

The Blob Utilities package provides a variety of functions to work with Blob objects in JavaScript and TypeScript. These functions cover creating Blobs from different data types, converting Blobs to other formats, downloading Blobs as files, and compressing Blob data. The package is lightweight and easy to use.

### Functions Offered

1. **createAndDownloadBlob**: Create a Blob from data and download it as a file.
2. **blobToBase64**: Convert a Blob to a Base64 string.
3. **base64ToBlob**: Convert a Base64 string to a Blob.
4. **getBlobMetadata**: Retrieve metadata (type and size) from a Blob.
5. **compressBlob**: Compress an image Blob to a specified quality.
6. **createTextBlob**: Create a Blob from a text string.
7. **createJSONBlob**: Create a Blob from a JSON object.
8. **createImageBlob**: Create a Blob from a Base64 image string.
9. **createBinaryBlob**: Create a Blob from binary data.
10. **blobToJSON**: Convert a Blob back to a JSON object.
11. **blobToImage**: Convert a Blob back to an image in Base64 format.
12. **blobToText**: Convert a Blob back to a text string.

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
import { createAndDownloadBlob } from 'blob-utilities';

const textBlob = new Blob(['Hello, world!'], { type: 'text/plain' });
createAndDownloadBlob(textBlob, 'hello.txt');
```

- **blobToBase64**

```typescript
import { blobToBase64 } from 'blob-utilities';

const blob = new Blob(['Hello, world!'], { type: 'text/plain' });
blobToBase64(blob).then(base64 => {
  console.log(base64);
});
```

- **base64ToBlob**

```typescript
import { base64ToBlob } from 'blob-utilities';

const base64 = 'data:text/plain;base64,SGVsbG8sIHdvcmxkIQ==';
const blob = base64ToBlob(base64);
console.log(blob);
```

- **getBlobMetadata**

```typescript
import { getBlobMetadata } from 'blob-utilities';

const blob = new Blob(['Hello, world!'], { type: 'text/plain' });
const metadata = getBlobMetadata(blob);
console.log(metadata); // { type: 'text/plain', size: 13 }
```

- **compressBlob**

```typescript
import { compressBlob } from 'blob-utilities';

const base64Image = 'data:image/png;base64,...'; // A valid Base64 string
const imageBlob = base64ToBlob(base64Image, 'image/png');
compressBlob(imageBlob, 0.7).then(compressedBlob => {
  console.log(compressedBlob);
});
```

- **createTextBlob**

```typescript
import { createTextBlob } from 'blob-utilities';

const textBlob = createTextBlob('Hello, world!');
console.log(textBlob);
```

- **createJSONBlob**

```typescript
import { createJSONBlob } from 'blob-utilities';

const jsonObject = { message: 'Hello, world!' };
const jsonBlob = createJSONBlob(jsonObject);
console.log(jsonBlob);
```

- **createImageBlob**

```typescript
import { createImageBlob } from 'blob-utilities';

const base64Image = 'data:image/png;base64,...'; // A valid Base64 string
const imageBlob = createImageBlob(base64Image);
console.log(imageBlob);
```

- **createBinaryBlob**

```typescript
import { createBinaryBlob } from 'blob-utilities';

const binaryData = new Uint8Array([72, 101, 108, 108, 111]); // Binary representation of 'Hello'
const binaryBlob = createBinaryBlob(binaryData);
console.log(binaryBlob);
```

- **blobToJSON**

```typescript
import { blobToJSON } from 'blob-utilities';

const jsonBlob = createJSONBlob({ message: 'Hello, world!' });
blobToJSON(jsonBlob).then(jsonObject => {
  console.log(jsonObject); // { message: 'Hello, world!' }
});
```

- **blobToImage**

```typescript
import { blobToImage } from 'blob-utilities';

const base64Image = 'data:image/png;base64,...'; // A valid Base64 string
const imageBlob = createImageBlob(base64Image);
blobToImage(imageBlob).then(base64 => {
  console.log(base64);
});
```

- **blobToText**

```typescript
import { blobToText } from 'blob-utilities';

const textBlob = createTextBlob('Hello, world!');
blobToText(textBlob).then(text => {
  console.log(text); // 'Hello, world!'
});
```




## Check Out My Other Packages

Explore more useful packages by visiting [my npm profile](https://www.npmjs.com/~iashish.99). Made with ❤️ by Ashish
