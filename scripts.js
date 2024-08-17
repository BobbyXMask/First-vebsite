function convertMP4toMOV() {
    const fileInput = document.getElementById('mp4File');
    const status = document.getElementById('statusMP4toMOV');

    if (fileInput.files.length === 0) {
        status.textContent = 'Please select an MP4 file.';
        return;
    }

    // Placeholder for actual conversion logic
    status.textContent = 'Conversion functionality is not implemented yet.';
}

function convertMOVtoMP4() {
    const fileInput = document.getElementById('movFile');
    const status = document.getElementById('statusMOVtoMP4');

    if (fileInput.files.length === 0) {
        status.textContent = 'Please select a MOV file.';
        return;
    }

    // Placeholder for actual conversion logic
    status.textContent = 'Conversion functionality is not implemented yet.';
}