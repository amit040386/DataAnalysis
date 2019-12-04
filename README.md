# DataAnalysis
Python based data analysis tool for Smart Steel Technologies

# Installation steps

First check for installed Python in your local machine. To check that, execute this command:

`pip -V`

If it says that pip is unknown command then execute the following commands to install pip

1. `sudo easy_install pip`
2. `pip -V` Now it should print pip version.

Now these are the actual installation steps

1. `sudo pip install virtualenv`
2. `python3 -m venv venv`
3. `. venv/bin/activate`
4. `pip install -r requirements.txt`
5. `python3 -m main`

Hot reloading is not available. Therefore it needs to execute the following command every-time after making changes in the code.

`python3 -m main`
