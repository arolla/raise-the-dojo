def process_checkout(order_id, amount, method, user): print(f"--- Processing {order_id} ---")

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
def send_mail(addr, subject): print(f">> Email to {addr}: {subject}")