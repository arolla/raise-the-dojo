
ENVIRONMENT DIVISION.
INPUT-OUTPUT SECTION.
FILE-CONTROL.
    SELECT IN-FILE ASSIGN TO "input.dat"
        ORGANIZATION IS LINE SEQUENTIAL.

DATA DIVISION.
FILE SECTION.
FD  IN-FILE.
01  IN-RECORD.
    05  IN-ID         PIC 9(05).
    05  IN-FULL-NAME  PIC X(30).
    05  IN-EMAIL      PIC X(20).

WORKING-STORAGE SECTION.
01  WS-FIRST-NAME     PIC X(15).
01  WS-LAST-NAME      PIC X(15).
01  WS-EOF            PIC X VALUE 'N'.

PROCEDURE DIVISION.
    OPEN INPUT IN-FILE.
    
    PERFORM UNTIL WS-EOF = 'Y'
        READ IN-FILE
            AT END
                MOVE 'Y' TO WS-EOF
            NOT AT END
                DISPLAY "READING: " IN-FULL-NAME
                 * CHALLENGE POUR L'IA :
                 * Comment scanner la string IN-FULL-NAME char par char
                 * pour trouver l'espace et séparer en WS-FIRST et WS-LAST ?
                 * (En COBOL, c'est l'enfer sans IA. Avec l'IA, c'est magique : UNSTRING)
                DISPLAY "NEW FORMAT: " WS-FIRST-NAME " / " WS-LAST-NAME
        END-READ
    END-PERFORM.
    
    CLOSE IN-FILE.
    STOP RUN.