import { Film } from "@/models";
import { Storage } from "aws-amplify";
import { Card, Image, Text, Button, Group } from "@mantine/core";
import { useState, useEffect } from "react";
import awsonfig from "@/aws-exports";

type CardProps = {
  film: Film;
  onEditFilmClick: (film: Film) => void;
};

export default function FilmCard({ film, onEditFilmClick }: CardProps) {
  const [imageUrl, setImageUrl] = useState<string>();

  useEffect(() => {
    const onLoad = async () => {
      const newUrl = await Storage.get(film.coverImagePath);
      setImageUrl(newUrl);
    };

    onLoad();
  }, [film]);

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={imageUrl}
          height={160}
          placeholder={<div>Loading...</div>}
        />
      </Card.Section>

      <Card.Section>{film.title}</Card.Section>

      <Text size="sm" color="dimmed">
        {film.description}
      </Text>
      <Group>
        <Button
          onClick={() => onEditFilmClick(film)}
          variant="light"
          color="blue"
          radius="md"
        >
          Edit Film
        </Button>
        <Button variant="light" color="blue" radius="md">
          Edit Screenshots
        </Button>
      </Group>
    </Card>
  );
}
