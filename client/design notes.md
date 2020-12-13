# Design notes

Firebase for authentication, just send an ID token with every request. Google login
Storage layer

## Documents

- `_id` format for documents: `file/file-name/delta-id`
  - `{_id, content, timestamp, project-name}`
- `_id` format for folders: `folder/folder-name/delta-id`
  - `{_id, name, file-list, timestamp, project-name}`
- `_id` format for projects: `project/project-name`
  - `{_id, name, description}`
