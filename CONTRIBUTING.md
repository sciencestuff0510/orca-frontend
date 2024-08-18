# The orca-frontend (Organisation Read for Cool Acronyms) Contributing Guide

Thank you for contributing to our orca-frontend repository, ensure you've read this guide completely before contributing to the repository.

## Table of Contents

- [File Structure](#file-structure)
- [How to Contribute](#how-to-contribute)
  - [Setting up your local clone](#setting-up-your-local-clone)
  - [Working on Issue](#working-on-an-issue)
  - [Opening Pull Request](#opening-a-pull-request)

### File Structure

```bash
├── api (backend)
│   ├── routes
│   ├── models
│   ├── etc...
├── client (frontend)
│   ├── public
│   ├── src
│   ├── etc...
├── CONTRIBUTING.md
└── README.md
```

### How to Contribute

#### Setting Up Your Local Clone

Before you begin working on anything, make sure you follow these steps in order to set up a clone on your local machine:

1. Clone the repo in your local environment. If you don't know how to do so, follow the GitHub documentation on how to [fork a repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo).

2. Clone the forked repo to your local machine with one of the commands below. You can also read the GitHub documentation on [cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

    ```bash
    # If you have SSH set up with Git:
    git clone git@github.com:sciencestuff0510/orca-frontend.git
    # Otherwise for HTTPS:
    git clone https://github.com/sciencestuff0510/orca-frontend.git
    ```

3. `cd` into the directory of your local clone, remember to always pull the `main` branch before you branch out from it to continue working on other sections' respective branches.

#### Working on an Issue

Once you have the repo cloned, and the local environment has been set, you can begin working on your issue:

1. Create a new branch, replacing the `<your branch name>` with an actual branch name that briefly explains the purpose of the branch in some way:

    ```bash
    git checkout -b <your branch name>

    # Some examples:
    git checkout -b docs_update
    git checkout -b api_routes
    git checkout -b client_redux
    ```

2. Add commits as you work on your issue, replacing the `<your commit message>` text with your actual commit message:

   ```bash
   git commit -m "<your commit message>" -m "<optional brief explanation about your commit>"

   # An example:
   git commit -m "Update solution files" -m "More efficient solution with a better time complexity to show learners for the best possible code"
   ```

3. Sync your local environment every often so that you don't lose on any newer progress.
    - Firstly sync your fork with the latest added commits using GitHub GUI.

      ![update-pulls](https://github.com/user-attachments/assets/2440059d-e283-4c04-94bf-013c8e37eeca)

    - Then pull those changes into your cloned repository.

        ```bash
        git pull
        ```

4. Push your branch to our repo, replacing the `<your branch name>` with the branch you've been working on locally:

    ```bash
    git push origin <your branch name>

    # An example:
    git push origin client_redux
    ```

#### Opening a Pull Request

1. After pushing your changes, go to our repo on GitHub and click the "Compare & pull request" button. If you have multiple of these buttons, be sure you click the one for the correct branch.
   - If you don't see this button, you can click the branch dropdown menu and then select the branch you just pushed from your local clone:

      ![GitHub branch dropdown menu](https://user-images.githubusercontent.com/70952936/150646139-bc080c64-db57-4776-8db1-6525b7b47be2.jpg)

   - Once you have switched to the correct branch on GitHub, click the "Contribute" dropdown and click the "Open pull request" button.

2. Fill the PR template summarising all new additions to your repositories, don't directly merge without a review by maintainers.

3. After your PR has been merged, delete it on the repo, just below the merged notification in the PR, there's an option to delete it, also delete that branch in your local environment and checkout to main to pull the updates.

    ```bash
    git branch -D branch_name
    git checkout main && git pull # pull only works if you synced your fork with main repo
    ```

**Thanks for contributing to our repo, Happy Coding <3 !**