function confirmCancel(event) {
    const ok = confirm("Are you sure you want to cancel?");
    if (!ok) {
        event.preventDefault();
        return false;
    }
    return true;
}

function markDelivered(event) {
    const ok = confirm("Mark as delivered?");
    if (!ok) event.preventDefault();
}

function undoCancel(event) {
    const ok = confirm("Undo cancellation?");
    if (!ok) event.preventDefault();
}

function undoDelivery(event) {
    const ok = confirm("Are you sure you want to undo delivery?");
    if (!ok) {
        event.preventDefault();
        return false;
    }
    return true;
}