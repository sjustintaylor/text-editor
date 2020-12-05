import { useEffect, useState } from "react";

export default () => {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNotes = async () => {
      setLoading(true);
      setError(false);
      try {
        // await new Promise((resolve) => setTimeout(resolve, 2000));
        setNotes([
          {
            id: 1,
            content:
              "Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.",
          },
          {
            id: 2,
            content: "Now that we know who you are, I know who I am. ",
          },
          {
            id: 3,
            content:
              "You know why, David? Because of the kids. They called me Mr Glass.",
          },
          {
            id: 4,
            content:
              "Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.",
          },
          {
            id: 5,
            content:
              "Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.",
          },
        ]);
      } catch (error) {
        console.error(error);
        setError(error.message || "Something went wrong...");
      }
      setLoading(false);
    };
    fetchNotes();
  }, []);

  const deleteNote = async () => {};
  const saveNote = async (id, content) => {
    if (id === "new") {
      // Create a new note
      setNotes([{ id, content }, ...notes]);
    } else {
    }
  };

  return { notes, error, loading, saveNote, deleteNote };
};
