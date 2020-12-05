// import { useEffect } from "react";

import { useEffect, useState } from "react";

export default () => {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dialogLoading, setDialogLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const [title, setTitle] = useState("Untitled Project");
  const [description, setDescription] = useState(
    "A wild collection of documents"
  );

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(null);
      try {
        // await new Promise((resolve) => setTimeout(resolve, 2000));
        setProjects([
          { title: "Birds", description: "birbs everywhere", id: 1 },
          { title: "Birds", description: "birbs everywhere", id: 2 },
        ]);
      } catch (error) {
        console.error(error);
        setError(error.message || "Something went wrong");
      }
      setLoading(false);
    };
    fetchProjects();
  }, []);
  const deleteProject = async (id) => {
    setDialogLoading(true);
    setError(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      console.error(error);
      setError(
        error.message || "Something went wrong while deleting the project"
      );
    }
    setDialogLoading(false);
  };
  const addProject = async () => {
    setDialogLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      console.error(error);
      setError(error.message || "Something went wrong");
    }
    setDialogLoading(false);
  };
  return {
    error,
    loading,
    projects,
    addProject,
    deleteProject,
    dialogLoading,
    showDialog,
    setShowDialog,
    setTitle,
    setDescription,
    title,
    description,
  };
};
