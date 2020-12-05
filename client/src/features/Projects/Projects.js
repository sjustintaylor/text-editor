import {
  AddIcon,
  Alert,
  Button,
  Spinner,
  Dialog,
  TextInput,
} from "evergreen-ui";
import React from "react";
import ProjectCard from "./components/ProjectCard";
import useHooks from "./hooks";

export default () => {
  const {
    projects,
    error,
    loading,
    addProject,
    deleteProject,
    dialogLoading,
    setShowDialog,
    showDialog,
    setTitle,
    setDescription,
    title,
    description,
  } = useHooks();
  return (
    <div className=" flex flex-col items-center mx-auto mt-5 content-between">
      <h1 className="text-center text-4xl mb-12">Projects</h1>
      {loading && (
        <Alert intent="none" appearance="card" marginBottom={16}>
          <div className="flex flex-row items-center">
            <Spinner size={24} className="mr-3" /> Loading projects
          </div>
        </Alert>
      )}
      {error && <Alert intent="danger" title={error} marginBottom={32} />}
      {!loading && projects && (
        <>
          {projects.map((el) => (
            <ProjectCard
              key={el.id}
              {...el}
              loading={dialogLoading}
              deleteProject={deleteProject}
            />
          ))}
          <Button
            appearance="primary"
            iconBefore={AddIcon}
            onClick={() => setShowDialog(true)}
          >
            Add a new project
          </Button>
        </>
      )}
      <Dialog
        intent="none"
        hasHeader={false}
        isShown={showDialog}
        onCloseComplete={() => setShowDialog(false)}
        onConfirm={() => {
          addProject().then(() => setShowDialog(false));
        }}
        isConfirmLoading={dialogLoading}
        confirmLabel={
          loading ? "Creating the project..." : "Create the project"
        }
      >
        <div className="flex flex-col items-center content-center">
          <h4 className="text-xl ">Project Title</h4>
          <TextInput
            onChange={(e) => setTitle(e.target.value)}
            className="mb-6"
            placeholder={title}
          />
          <h4 className="text-xl ">Project Description</h4>
          <TextInput
            onChange={(e) => setDescription(e.target.value)}
            placeholder={description}
          />
        </div>
      </Dialog>
    </div>
  );
};
