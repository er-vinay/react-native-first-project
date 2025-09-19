import { View, Text, ImageBackground, Image } from 'react-native';
const ImageComponentExample = () => {
    return (
        <ImageBackground
            source={{ uri: 'https://reactjs.org/logo-og.png' }}
            style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center' }}
            imageStyle={{ opacity: 0.5 }}
            blurRadius={2}
            fadeDuration={1000}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Image Component Example</Text>
                <Image 
                    source={{ uri: 'https://reactjs.org/logo-og.png' }}
                    style={{ width: 100, height: 100, marginTop: 20 }}
                    resizeMode="cover"
                />
                <Image 
                    source={{ uri: 'https://reactjs.org/logo-og.png' }}
                    style={{ width: 100, height: 100, marginTop: 20 }}
                    resizeMode="cover"
                />
            </View>
        </ImageBackground>
    );
};
export default ImageComponentExample;