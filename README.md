# WAVE - Multiple load generator for computer network experimentation

[WAVE User Manual](Manual_do_Usuario_do_WAVE.pdf)

[Explanatory Video](https://www.youtube.com/watch?v=AOsvDJgxGQ8&ab_channel=JeffersonLucasFerreiradaSilva)

[Artigo Salão de Ferramentas SBRC 2023](https://doi.org/10.5753/sbrc_estendido.2023.712)

## Checking the Required Requirements

### Checking if Python3 is installed and it's version:

![wave-version-python3](./screenshots/wave-version-python32.png)

### Additionally, the VirtualEnv virtual environment is required:

![wave-version-venv](./screenshots/wave-version-venv2.png)

### Checking the Docker and docker compose components:

![wave-version-docker](./screenshots/wave-version-docker2.png)

![wave-version-docker-compose](./screenshots/wave-version-docker-compose2.png)

### Checking what version of Virtualbox is installed:

![wave-version-virtualbox](./screenshots/wave-version-virtualbox2.png)

### Checking what version of Vagrant is installed:

![wave-version-vagrant](./screenshots/wave-version-vagrant2.png)

The versions shown in the figures were those tested at the time of this manual's creation.

## Downloading the Code and Starting the Environment

### Cloning the official repository and starting the system:

```
$ git clone https://github.com/ifpb/new_wave.git
$ cd new_wave/wave
$ ./app-compose.sh --start
```

### Checking the execution in a Docker enviroment:

![wave-cli-docker](./screenshots/wave-cli-docker2.png)

As can be seen in the figure above, the WAVE Initialization module uses two containers for its execution: wave-app and grafana-oss. On the left side of the figure, we have the output of the WAVE startup command.

### The WAVE Web module can be accessed via a browser

![wave-web-home](./screenshots/wave-2.png)

The form contains fields for entering network data for both the traffic load source and destination. In addition to the IP address, it is possible to select environment provisioning through a container or a virtual machine with configurable memory size and number of virtual CPUs. Finally, the user can choose which workload model to apply, either sinusoid, flashcrowd or step and if they want to use micro-burst as well.

## Ending the WAVE Execution

### Finalizing and removing the container environment:

```
$ ./app-compose.sh --destroy
```

By running the command above, the user terminates the WAVE WEB module and removes the containers responsible for the other initiated modules. To restart the entire system, simply execute the same command, replacing the --destroy argument with --start.
