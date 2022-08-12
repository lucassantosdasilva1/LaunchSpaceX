import React, { useCallback, useEffect, useState } from "react";
import IData from "../../../core/dto";
import v3DTO from "../../../core/dto/v3DTO";
import {
  Container,
  Title,
  Description,
  Player,
  HorizontalContainer,
  Badge,
  Label,
  PosterImage,
} from "./styles";
import { format } from "date-fns";
import { useNavigation } from "@react-navigation/native";

type Props = {
  route: { params: { data: v3DTO } };
};

const Details = ({
  route: {
    params: { data },
  },
}: Props) => {
  const navigation = useNavigation();
  const openWebView = (uri: string) => navigation.navigate("WebView", { uri });

  const [playing, setPlaying] = useState(false);
  const posters = data.links.flickr_images;

  const onStateChange = useCallback(
    (state: any) => (state === "ended" ? setPlaying(false) : false),
    [playing]
  );

  useEffect(() => {
    return () => setPlaying(false);
  }, []);

  return (
    <Container>
      <Title value={data.mission_name} />

      <Player
        play={playing}
        videoId={data.links.youtube_id}
        onChangeState={onStateChange}
      />

      {data.launch_date_utc && (
        <Description value={format(new Date(data.launch_date_utc), "dd/MM/yyyy")} />
      )}

      {data.details && <Description value={data.details} />}
      
      <HorizontalContainer>
        {data.links.reddit_campaign && (
          <Badge onPress={() => openWebView(data.links.reddit_campaign)}>
            <Label value="CAMPAIGN" />
          </Badge>
        )}

        {data.links.reddit_launch && (
          <Badge onPress={() => openWebView(data.links.reddit_launch)}>
            <Label value="LAUNCH" />
          </Badge>
        )}

        {data.links.reddit_media&& (
          <Badge onPress={() => openWebView(data.links.reddit_media)}>
            <Label value="MEDIA" />
          </Badge>
        )}

        {data.links.reddit_recovery && (
          <Badge onPress={() => openWebView(data.links.reddit_recovery)}>
            <Label value="RECOVERY" />
          </Badge>
        )}
      </HorizontalContainer>

      {posters.length > 0 && (
        <>
          {posters.map((poster) => (
            <PosterImage uri={poster} />
          ))}
        </>
      )}
    </Container>
  );
};

export default Details;
