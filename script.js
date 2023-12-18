function scanBarcode() {
    const barcode = document.getElementById('barcodeInput').value;
    if (barcode) {
        // Here you would handle the barcode (like searching for existing data)
        // For now, we'll just display the data entry form
        document.getElementById('dataEntryForm').style.display = 'block';
    }
}

function saveData() {
    const partNumber = document.getElementById('partNumber').value;
    const quantity = document.getElementById('quantity').value;
    const location = document.getElementById('location').value;

    // Here you would save the data, possibly to a server or local storage
    console.log('Saving data:', { partNumber, quantity, location });

    // Reset fields
    document.getElementById('barcodeInput').value = '';
    document.getElementById('partNumber').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('location').value = '';
    document.getElementById('dataEntryForm').style.display = 'none';
}
