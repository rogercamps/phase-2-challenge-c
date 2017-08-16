
1 - What is the PATH environment variable used for in UNIX systems?
- It specifies a set of directories where executable programs are located. In general, each executing process or user session has its own PATH setting.

2 - On a UNIX computer, how do you stop a running process?
- You can use Ctrl - C to end a program's execution in the terminal. You can kill programs that have already been stopped with kill: kill PID


3 - Which command can you use to see which homebrew packages you've installed?
- ```$ brew list```

4 - On a UNIX computer, how do you find the process id of a running process?
- using the command ```$ ps```


5 - In a terminal, what does control-c do?
- Kills the current process

6 - What would be the result of typing the following commands?
  ```sh
  $ cd /Users/lucy
  - goes into the lucy directory
  $ mkdir one
  - creates a folder called one
  $ touch alpha
  - creates a file called alpha
  $ cd one
  - goes inside the folder called one
  $ touch alpha
  - creates another file called alpha
  $ pwd
  - shows the present working directory
  ```

7 - How do you see which environment variables are set in your shell?
- ```printenv```

8 - What keyboard shortcut do you use to perform a "Find" search in your
 editor?
- Command + F

9 - How do you see which aliases you have in your shell?
- Just type ```alias``` in your shell to see the full list

10 - When a terminal command completes, how can you tell if it was successful or not?
- If is successful I get no response, and in Zsh epending on if what I see is a green or a red arrow


11 - What does your `~/.gitconfig` have in it? (paste the whole file here)
- ```git config --list``` shows the following results

credential.helper=osxkeychain

user.name=rogercamps

user.email=rogercamps@me.com

push.default=simple

core.repositoryformatversion=0

core.filemode=true

core.bare=false

core.logallrefupdates=true

core.ignorecase=true

core.precomposeunicode=true

remote.origin.url=https://github.com/rogercamps/phase-2-challenge-2.git

remote.origin.fetch=+refs/heads/*:refs/remotes/origin/*

branch.master.remote=origin

branch.master.merge=refs/heads/master


12 - What is the difference between a relative and absolute path?
- One has to be calculated with respect to another URI. The other does not.

13 - Lets say you have the following file structure

  ```
  ~
  └── Projects
      ├── airbnb-for-llamas
      │   └── package.json
      └── facebook-for-mimes
          ├── README.md
          └── package.json
  ```

  And you were in the `facebook-for-mimes` folder. What command would you use to copy the `README.md` file to the `airbnb-for-llamas` folder?

- cp README.md ../airbnb-for-llamas

14 - What keyboard shortcut do you use in your editor to quickly navigate to a file in the current project?
- Command + T

15 - Give an example of a file or folder pattern you commonly add to a .gitignore file and why you add it

- ```node_modules```

- I add it beacause I don't want to include all node modules I am not using

16 - What are the main differences between `Array.sort` and `Array.filter` in JavaScript?
- Sort returns the same array and filter returns a new array
