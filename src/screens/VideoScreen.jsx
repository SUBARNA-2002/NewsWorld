import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import YoutubePlayer from "react-native-youtube-iframe";
import { StatusBar } from "expo-status-bar";

const VideoScreen = () => {
  const [videosData, setVideosData] = useState([]);
  const [currentVideoId, setCurrentVideoId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCupvZG-5ko_eiXAupbDfxWw&maxResults=25&key=AIzaSyDMIr8RGH3ujPBWZctlKpTehObtio7_6jM"
        );
        setVideosData(res?.data?.items);
        setCurrentVideoId(res?.data?.items[0]?.id?.videoId);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchVideos();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.playerContainer}>
        {currentVideoId && (
          <YoutubePlayer
            height={220}
            play={isPlaying}
            videoId={currentVideoId}
          />
        )}
      </View>
      <ScrollView style={styles.listContainer}>
        {videosData?.map((video, index) => (
          <TouchableOpacity
            key={index}
            style={styles.videoItem}
            onPress={() => {
              setCurrentVideoId(video.id.videoId);
              setIsPlaying(true);
            }}
          >
            <Image
              style={styles.thumbnail}
              source={{ uri: video.snippet.thumbnails.default.url }}
            />
            <View style={styles.titleContainer}>
              <Text className='text-base font-semibold'>{video.snippet.title}</Text>
              <Text numberOfLines={3} className='pt-2'>{video.snippet.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: "#d4d9de",
  },
  playerContainer: {
    // flex-
    paddingTop: 38,
    // backgroundColor: "red",
    paddingBottom: 10,
  },
  listContainer: {
    flex: 1,
    // paddingTop: 10,
  },
  videoItem: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },
  thumbnail: {
    width: 100,
    height: 100,
  },
  titleContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    fontSize: 16,
  },
});

export default VideoScreen;
