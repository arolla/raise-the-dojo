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