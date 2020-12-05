import React from "react";
import { Dialog, IconButton, Tooltip, TrashIcon } from "evergreen-ui";
import { withRouter } from "react-router-dom";
import useHooks from "./hooks";

export default withRouter(
  ({ title, id, description, history, loading, deleteProject }) => {
    const { showDialog, setShowDialog } = useHooks();
    return (
      <div
        className="p-5 mb-6 mx-6  w-11/12 max-w-xl lg:w-6/12 rounded-lg min-w shadow flex flex-row place-content-between items-start hover:shadow-lg"
        onClick={() => {
          history.push(`/app/editor/${id}`);
        }}
      >
        <div className="flex flex-col items-start">
          <h3 className="text-2xl ">{title}</h3>
          <p>{description}</p>
        </div>
        <div onClick={(ev) => ev.stopPropagation()}>
          <Dialog
            intent="danger"
            isShown={showDialog}
            title="Are you sure?"
            onCloseComplete={() => setShowDialog(false)}
            onConfirm={() => {
              deleteProject(id).then(() => setShowDialog(false));
            }}
            isConfirmLoading={loading}
            confirmLabel={
              loading ? "Deleting the project..." : "Delete the project"
            }
          >
            Deleting the project "{title}" can't be undone.
          </Dialog>
        </div>
        <div className="flex flex-row items-start place-content-between">
          <Tooltip content="Delete the project">
            <IconButton
              intent="danger"
              appearance="minimal"
              iconSize={20}
              icon={TrashIcon}
              onClick={(ev) => {
                ev.stopPropagation();
                setShowDialog(true);
              }}
            />
          </Tooltip>
        </div>
      </div>
    );
  }
);
