"use client";
import { useEffect, useState } from "react";
import { Amplify, DataStore, Storage } from "aws-amplify";
import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import { withAuthenticator, FileUploader } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsconfig from "../aws-exports";
import { Grid, MantineProvider, Modal, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FilmUpdateForm, FilmCreateForm } from "@/ui-components";
import { Film } from "@/models";
import FilmCard from "@/components/FilmCard";
import AppHeader from "@/components/AppHeader";

Amplify.configure(awsconfig);
Storage.configure(awsconfig);

function Home({ signOut, user }: WithAuthenticatorProps) {
  const [films, setFilms] = useState<Film[] | undefined>(undefined);
  const [selectedFilm, setSelectedFilm] = useState<Film>();
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    const onLoad = async () => {
      const data = await DataStore.query(Film);
      await data.forEach((film) => {
        film.screenshots.toArray();
      });
      setFilms(data);
      console.log(data)
    };

    onLoad();
  }, []);

  const handleFilmEditOnClick = (film: Film) => {
    setSelectedFilm(film);
    open();
  };

  const handleAddFilmOnClick = () => {
    const newFilm = new Film({
      title: "",
      videoUrl: "",
      description: "",
      coverImagePath: "",
      type: "",
    });
    open();
  };

  const handleSignOut = () => {
    signOut!();
  };

  return (
    <MantineProvider withGlobalStyles>
      <main>
        <AppHeader email={user?.attributes!.email!} signOut={handleSignOut} />
        <section>
          <Button variant="outline" onClick={handleAddFilmOnClick}>
            Add Film
          </Button>
          <Grid columns={24}>
            {films &&
              films.map((film) => {
                return (
                  <Grid.Col span={8}>
                    <FilmCard
                      onEditFilmClick={handleFilmEditOnClick}
                      film={film}
                    />
                  </Grid.Col>
                );
              })}
          </Grid>
        </section>
        <section>
          <Modal opened={opened} onClose={close}>
            {!!selectedFilm?.id ? (
              <FilmUpdateForm onSuccess={close} film={selectedFilm} />
            ) : (
              <FilmCreateForm onSuccess={close} />
            )}
            <FileUploader
              isPreviewerVisible
              showImages
              accessLevel="public"
              acceptedFileTypes={["image/*"]}
            />
          </Modal>
        </section>
      </main>
    </MantineProvider>
  );
}

export default withAuthenticator(Home, { hideSignUp: true });
