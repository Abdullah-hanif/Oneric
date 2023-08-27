import axios from 'axios';

const UploadCloudinary = async (fileUri) => {
    const data = new FormData();
    data.append('file', {
        uri: fileUri,
        type: 'image/jpeg', // Change to the correct MIME type if necessary
        name: 'image.jpg', // Change the filename as needed
    });
    data.append('upload_preset', 'fiverr');

    try {
        console.log({
            fileUri,
            data,
        }, 'selected image for Cloudinary upload');

        const response = await axios.post(
            'https://api.cloudinary.com/v1_1/akif/image/upload',
            data
        );

        console.log(response, 'Cloudinary API response');

        if (response.status === 200) {
            const responseData = response.data;
            const { secure_url } = responseData;
            return secure_url;
        } else {
            console.log('Upload failed with status:', response.status);
        }
    } catch (error) {
        console.log('Error uploading to Cloudinary:', error);
    }
};

export default UploadCloudinary;
