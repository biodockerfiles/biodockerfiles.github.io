---
title: Submit
---

Please follow below instructions to submit a Dockerfile to biodockerfiles. The project biodockerfiles is maintained in GitHub so we are required to have a GitHub account to do a submission. [Visit GitHub Signup page](https://github.com/join){:target="_blank"} for creating a free account on GitHub.

### Using GitHub's user interface

Go to [the directory in biodockerfiles GitHub repository that stores Dockerfiles](https://github.com/biodockerfiles/biodockerfiles.github.io/tree/master/_dockerfiles){:target="_blank"}. You may want to explore what Dockerfiles are available and how they are written.

Hit the `Create new file` button at the top to create a new Dockerfile under `_dockerfiles/`.

Type the name of the file as `tool-version.md` in the text field. Don't forget to replace `tool` and `version`. Note that `tool` and `version` should have lowercase characters and separated by a hyphen (`-`) e.g. `samtools-1.10`.

Use the below template for our file.

~~~markdown
---
layout: default
title: tool-version
date: YYYY-MM-DD HH:MM:SS +/-TTTT
excerpt: One sentence description of the tool
website: URL to the website of the tool
---

```dockerfile
# Here goes the Dockerfile
```
~~~

Hit the `Propose new file` button at the end of the page to create the Dockerfile. This will fork the project and create the Dockerfile in a branch in the fork. 

We then see `Comparing changes` page and we hit the `Create pull request` button (and then again in the following view) to actually submit the Dockerfile to biodockerfiles.

### Using GitHub's command-line interface

biodockerfiles is built with Jekyll so we need to setup Ruby and Bundler to use it. Go to [Ruby installation page](https://www.ruby-lang.org/en/documentation/installation/){:target="_blank"} and [bundler website](https://bundler.io/){:target="_blank"} for instructions to install them to our computer. We'll also need `git` to be able to download the project and upload our submissions. Go to [git installation page](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git){:target="_blank"} for instructions to install it. We also need GitHub's command-line interface (CLI) for some of the operations such as forking a repository or creating a pull request. Go to [GitHub CLI's installation page](https://cli.github.com/manual/installation){:target="_blank"} to install it on our computer.

After everything is set up, open the Terminal and navigate to a directory that you want to keep biodockerfiles. Below commands are for *nix systems so please use Windows-counterparts when necessary.

Use below commands to fork the project biodockerfiles and clone the fork into our computer.

```bash
cd ~/Desktop/
gh repo fork https://github.com/biodockerfiles/biodockerfiles.github.io.git --clone=true
cd biodockerfiles.github.io/
```

Now, we have the project and are inside it, we can install dependencies by running Bundler.

```bash
bundle
```

After we installed the dependencies, we can create a new Dockerfile using Jekyll Compose.

```bash
bundle exec jekyll compose "tool-version" --collection "dockerfiles"
```

Don't forget to replace `tool` and `version`. Note that `tool` and `version` should have lowercase characters and separated by a hyphen (`-`) e.g. `samtools-1.10`.

This operation will create a file under `_dockerfiles/` directory with the name `tool-version.md`. Open it with our favorite editor. Here we'll be using Visual Studio Code.

```bash
code _dockerfiles/tool-version.md
```

We will see a file as shown below.

```markdown
---
layout: default
title: tool-version
date: YYYY-MM-DD HH:MM:SS +/-TTTT
excerpt: 
website: 
---
```

This information wrapped with `---` is called front-matter and it contains metadata information about the Dockerfile. Most information will be added automatically. Add one sentence description to `excerpt` and type the tool's website URL to `website`.

We then add the Dockerfile after the front-matter by wrapping it with triple backticks with `dockerfile` tag as shown below.

~~~markdown
```dockerfile
# Here goes the Dockerfile
```
~~~

So the entire content of `_dockerfiles/tool-version.md` will be as shown below.

~~~markdown
---
layout: default
title: tool-version
date: YYYY-MM-DD HH:MM:SS +/-TTTT
excerpt: One sentence description of the tool
website: URL to the website of the tool
---

```dockerfile
# Here goes the Dockerfile
```
~~~

Alternatively, we can locally see how the Dockerfile look by running Jekyll as shown below.

```bash
bundle exec jekyll serve
```

After running above command, go to `http://localhost:4000/tool-version/` in our favorite browser to see how the Dockerfile looks.

Now, we created the file and can use `git` to push our Dockerfile to the forked repository.

```bash
git add _dockerfiles/tool-version.md
git commit -m 'submitting tool-version'
git push origin master
```

Finally, we create a pull request to the original biodockerfiles repository to actually submit the Dockerfile.

```bash
gh pr create -f -B https://github.com/biodockerfiles/biodockerfiles.github.io.git
```
