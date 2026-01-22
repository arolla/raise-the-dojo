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