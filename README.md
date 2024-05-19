# React Blob

React Blob is a lightweight npm package for generating and handling small Blob objects in various formats, making it easier to work with binary data in web applications.

## Features

- **Text Blob**: Create a Blob from a text string.
- **JSON Blob**: Create a Blob from a JSON object.
- **Image Blob**: Create a Blob from a Base64 encoded image.
- **Binary Data Blob**: Create a Blob from binary data.
- **Blob to Base64**: Convert a Blob to a Base64 string.
- **Base64 to Blob**: Convert a Base64 string to a Blob.
- **Download Blob**: Trigger a file download for a Blob.
- **Display Blob Content**: Display text Blob content or image Blob in the browser.
- **Blob Metadata**: Extract metadata from a Blob.
- **Blob Compression**: Compress image Blobs.

## Use Cases

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

## Installation

Install the package using npm:

```ssh
npm install react-blob
```

or

```ssh
yarn add react-blob
```

## Usage

- **Create a Text Blob**

```ssh
import { createTextBlob } from 'blob-utilities';

const textBlob = createTextBlob('Hello, world!');
console.log(textBlob);
```

- **Create a JSON Blob**

```ssh
import { createJSONBlob } from 'blob-utilities';

const jsonBlob = createJSONBlob({ message: 'Hello, world!' });
console.log(jsonBlob);
```

- **Create an Image Blob**

```ssh
import { createImageBlob } from 'blob-utilities';

const imageBlob = createImageBlob(base64Image);
console.log(imageBlob);
```

- **Create a Binary Data Blob**

```ssh
import { createBinaryBlob } from 'blob-utilities';

const binaryBlob = createBinaryBlob([72, 101, 108, 108, 111]); // Binary representation of 'Hello'
console.log(binaryBlob);
```

- **Convert Blob to Base64**

```ssh
import { blobToBase64 } from 'blob-utilities';

blobToBase64(imageBlob).then(base64 => {
 console.log(base64);
});
```

- **Convert Base64 to Blob**

```ssh
import { base64ToBlob } from 'blob-utilities';

const blob = base64ToBlob(base64, 'image/png');
console.log(blob);
```

- **Download Blob as File**

```ssh
import { downloadBlob } from 'blob-utilities';

downloadBlob(jsonBlob, 'data.json');
```

- **Display Text Blob Content**

```ssh
import { displayTextBlobContent } from 'blob-utilities';

displayTextBlobContent(textBlob);

```

- **Display Image Blob**

```ssh
import { displayImageBlob } from 'blob-utilities';

displayImageBlob(imageBlob);

```

- **Get Blob Metadata**

```ssh
import { getBlobMetadata } from 'blob-utilities';

const metadata = getBlobMetadata(imageBlob);
console.log(metadata);

```

- **Compress Blob**

```ssh
import { compressBlob } from 'blob-utilities';

compressBlob(imageBlob, 0.7).then(compressedBlob => {
 console.log(compressedBlob);
});
```

## Check Out My Other Packages

Explore more useful packages by visiting [my npm profile](https://www.npmjs.com/~iashish.99). Made with ❤️ by Ashish
