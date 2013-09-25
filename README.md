portdiscovery
=============

Finds an open port and sends output to stdout

```bash
npm install -g portdiscovery
``

#### Usage

Simply run `portdiscovery`. 

You can assign to a bash variable then use it to deploy your apps, for example:

```bash
httpPort=$(portdiscovery)
echo $httpPort
``