C'est parti. Voici les Kits Participants prêts à l'emploi pour tes deux Dojos Brownfield.

Le code est volontairement "naïf", couplé et impératif. C'est exactement ce genre de code que l'on retrouve dans les applications qui ont 5-10 ans d'âge.

📂 KIT DOJO 6 : "Operation Open Heart"
Contexte : La classe de paiement monolithique. Mission : Ajouter le cas "3x Payment" sans casser les if/else existants.

☕ Option A : Java (Legacy Monolith)
public class CheckoutService {

    // Méthode appelée par le Controller
    public void processPayment(String orderId, double amount, String type, String userEmail) {
        System.out.println("Processing order " + orderId);
        
        // Logique "Spaghetti"
        if (amount < 0) {
            throw new RuntimeException("Invalid amount");
        }

        if (type.equals("VISA") || type.equals("MASTERCARD")) {
            System.out.println("Connecting to Bank Gateway...");
            // Frais bancaires hardcodés
            double finalAmount = amount * 1.01; 
            System.out.println("Charging card: " + finalAmount);
            sendEmail(userEmail, "Payment success");

        } else if (type.equals("PAYPAL")) {
            System.out.println("Redirecting to PayPal API...");
            if (amount > 1000) {
                System.out.println("Warning: High Risk Transaction");
            }
            sendEmail(userEmail, "PayPal payment pending");

        } else if (type.equals("CHEQUE")) {
            System.out.println("Waiting for physical cheque reception.");
            // Pas d'email ici car c'est manuel (incohérence métier typique)
        
        } else {
            throw new RuntimeException("Unknown payment type");
        }
        
        // Mise à jour Stock (Effet de bord caché)
        System.out.println("UPDATE database SET stock = stock - 1 WHERE order = " + orderId);
    }

    private void sendEmail(String to, String subject) {
        System.out.println("SENDING EMAIL to " + to + ": " + subject);
    }
}
🔷 Option B : TypeScript (Node.js Service)
class LegacyPaymentProcessor {
  
  process(order: any, method: string): void {
    console.log(`Starting payment for Order #${order.id}`);

    let total = order.price;

    // Validation mélangée au calcul
    if (!order.user.email) {
      throw new Error("No email found");
    }

    if (method === 'CC') {
      // Credit Card Logic
      const fees = total * 0.02;
      console.log(`Stripe Charge: ${total + fees}`);
      this.notifyUser(order.user.email, "Card Debited");

    } else if (method === 'BANK_TRANSFER') {
      // Virement
      console.log("Generating IBAN details...");
      // Logic métier bizarre : remise de 5% si virement
      total = total * 0.95;
      console.log(`Waiting for transfer of ${total}`);
      this.notifyUser(order.user.email, "Please send money");

    } else {
      console.log("Error: Unsupported method");
      return;
    }

    // Effet de bord Database
    console.log(`DB: INSERT INTO transactions VALUES (${order.id}, ${total}, 'PENDING')`);
  }

  private notifyUser(email: string, msg: string) {
    console.log(`MAILER: Sending '${msg}' to ${email}`);
  }
}
🐍 Option C : Python (Script procédural)
def process_checkout(order_id, amount, method, user):
    print(f"--- Processing {order_id} ---")
    
    if amount <= 0:
        return {"status": "error", "msg": "Free?"}

    final_price = amount

    # Gros bloc if/elif
    if method == "CREDIT_CARD":
        print("Calling VISA API...")
        # Rule: Free shipping if VISA > 500
        if amount > 500:
            print("Applying Free Shipping coupon")
        print(f"Charged: {amount}")
        send_mail(user['email'], "Receipt attached")

    elif method == "CRYPTO":
        # Feature ajoutée à la va-vite l'an dernier
        print("Calculating BTC rate...")
        btc_amount = amount / 40000 
        print(f"Wallet debit: {btc_amount} BTC")
        # Note: Pas d'envoi d'email pour la crypto (oubli du dev)

    else:
        raise ValueError("Unknown method")

    # Update DB
    print(f"SQL: UPDATE orders SET status='PAID' WHERE id={order_id}")
    return {"status": "success"}

def send_mail(addr, subject):
    print(f">> Email to {addr}: {subject}")
🦖 Option D : COBOL (Le Monolithe Mainframe)
IDENTIFICATION DIVISION.
PROGRAM-ID. PAY-PROCESS.

DATA DIVISION.
WORKING-STORAGE SECTION.
01  WS-ORDER-ID      PIC 9(5).
01  WS-AMOUNT        PIC 9(5)V99.
01  WS-TYPE          PIC X(10).
01  WS-FINAL-AMT     PIC 9(5)V99.

PROCEDURE DIVISION.
    DISPLAY "STARTING PAYMENT LOGIC".
    
    * LOGIQUE IMPERATIVE DURE
    IF WS-AMOUNT < 0 THEN
        DISPLAY "ERROR: NEGATIVE AMOUNT"
        GO TO END-PROCESS
    END-IF.

    IF WS-TYPE = 'VISA' THEN
        COMPUTE WS-FINAL-AMT = WS-AMOUNT * 1.01
        DISPLAY "CALLING VISA SUBROUTINE..."
        DISPLAY "CHARGED: " WS-FINAL-AMT
        DISPLAY "SENDING SMTP CONFIRMATION..."
    ELSE
        IF WS-TYPE = 'CASH' THEN
            DISPLAY "WAITING FOR STORE VISIT"
            MOVE WS-AMOUNT TO WS-FINAL-AMT
        ELSE
            DISPLAY "UNKNOWN PAYMENT TYPE"
            GO TO END-PROCESS
        END-IF
    END-IF.

    * DATABASE UPDATE
    DISPLAY "DB2 UPDATE: SET STATUS='OK' FOR ID " WS-ORDER-ID.

END-PROCESS.
    STOP RUN.
📂 KIT DOJO 7 : "The Great Migration"
Contexte : Une base de clients avec des noms mal formatés. Mission : Séparer Prénom/Nom et gérer la migration.

💾 Input Commun : Le Fichier Sale (dirty_data.csv)
À fournir à tous les participants.

id,full_name,email
1,"Jean Dupont",jean@mail.com
2,"MARIE CURIE",marie@science.org
3,"Vincent van Gogh",vincent@art.nl
4,"Dr. Gregory House",house@md.com
5,"Martin",martin@solo.com
6,"DUPONT Jean-Pierre",jp@dupont.fr
7,"ERR_DATA_NULL",no_email
☕ Option A : Java (Data Loader)
public class CustomerMigrator {
    
    // Ancien modèle (celui qu'il faut faire évoluer)
    static class Customer {
        String id;
        String fullName; // <--- C'est ici le problème
        String email;
    }

    public void migrateData(List<String> csvLines) {
        for (String line : csvLines) {
            String[] parts = line.split(",");
            Customer c = new Customer();
            c.id = parts[0];
            c.fullName = parts[1].replace("\"", ""); // Nettoyage basique
            
            // TODO: C'est ici que l'IA doit intervenir
            // Comment splitter c.fullName en firstName / lastName ?
            // Attention aux cas comme "Vincent van Gogh"
            
            saveToNewSchema(c);
        }
    }

    private void saveToNewSchema(Customer c) {
        // Simulation d'écriture en base
        System.out.println("Migrating: " + c.fullName); 
    }
}
🔷 Option B : TypeScript (Migration Script)
interface LegacyUser {
  id: string;
  fullName: string; // The legacy field
}

interface NewUser {
  id: string;
  firstName: string;
  lastName: string;
  isManualReviewNeeded: boolean;
}

function migrate(csvData: string) {
  const lines = csvData.split('\n');
  
  lines.forEach(line => {
    const cols = line.split(',');
    const oldName = cols[1]; // "Jean Dupont"

    // YOUR MISSION: Implement logic here with AI
    // const { first, last } = splitName(oldName);

    console.log(`Processing ${oldName}...`);
  });
}
🐍 Option C : Python (ETL Script)
import csv

def run_migration(file_path):
    with open(file_path, 'r') as f:
        reader = csv.DictReader(f)
        
        for row in reader:
            raw_name = row['full_name']
            
            # --- ZONE A CODER ---
            # L'IA doit générer une logique robuste ici.
            # Pas juste un simple split(' ') !
            # Ex: "Vincent van Gogh" -> First: Vincent, Last: van Gogh
            
            first_name = "TODO"
            last_name = "TODO"
            # --------------------

            print(f"Migrating '{raw_name}' -> First: {first_name}, Last: {last_name}")

# Simulation
# run_migration('dirty_data.csv')
🦖 Option D : COBOL (Fixed Format)
Le COBOL lit souvent des fichiers positionnels, ce qui rend le split encore plus dur car la taille est fixe.

IDENTIFICATION DIVISION.
PROGRAM-ID. DATA-MIG.

DATA DIVISION.
FILE SECTION.
FD  IN-FILE.
01  IN-RECORD.
    05  IN-ID         PIC 9(05).
    05  IN-FULL-NAME  PIC X(30).  *> Le champ monolithe de 30 chars
    05  IN-EMAIL      PIC X(20).

WORKING-STORAGE SECTION.
01  WS-FIRST-NAME     PIC X(15).
01  WS-LAST-NAME      PIC X(15).

PROCEDURE DIVISION.
    OPEN INPUT IN-FILE.
    
    READ IN-FILE
        NOT AT END
            DISPLAY "READING: " IN-FULL-NAME
            
            * CHALLENGE POUR L'IA :
            * Comment scanner la string IN-FULL-NAME char par char
            * pour trouver l'espace et séparer en WS-FIRST et WS-LAST ?
            * (En COBOL, c'est l'enfer sans IA. Avec l'IA, c'est magique : UNSTRING)
            
            DISPLAY "NEW FORMAT: " WS-FIRST-NAME " / " WS-LAST-NAME
    END-READ.
    
    CLOSE IN-FILE.
    STOP RUN.
💡 Conseil pour distribuer ces kits :
Créez un dépôt Git ou un dossier partagé avec ces fichiers.
Pour le Dojo 6, l'exercice commence directement dans l'IDE.
Pour le Dojo 7, donnez d'abord le fichier .csv et demandez-leur de "discuter" avec l'IA avant même d'ouvrir le code.