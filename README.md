# organic-symlink

The organelle wraps symlink portion of the file system api

## Sample usage

    instance = new Symlink(new Plasma(), {
      "symlink": {
        "target": {
          "node_modules": {
            "models": "context/models"
          }
        }
      }
    })
    // ....
    // require("models/MyModel")
    // & etc. all "models/..." relative requires are symlinks
    // pointing at context/models/...



## DNA structure and defaults

    {
      symlink: {
        "target": {
          "relative/to/cwd/root/path": {
            "file_or_folder_name": "relative/to/cwd/source/file_or_folder",
            ...
          },
          ...
        }
      }
    }

Upon construction executes reaction over `dna.symlink.target`
by walking every `root/path` and creating symlinks to
`file_or_folder` with respective source.

All paths are relative to current working directory

## reaction api

### symlink(c, next)

    {
      "target": {
        "relative/to/cwd/root/path": {
          "file_or_folder_name": "relative/to/cwd/source/file_or_folder",
          ...
        },
        ...
      }
    }


### unsymlink(c, next)

    {
      "target": {
        "relative/to/cwd/root/path": {
          "file_or_folder_name": "relative/to/cwd/source/file_or_folder",
          ...
        },
        ...
      }
    }
