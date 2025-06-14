import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    header: {
        padding: 20,
        backgroundColor: '#1E1E1E',
        borderBottomWidth: 1,
        borderBottomColor: '#D4AF37',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#D4AF37',
        textAlign: 'center',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    emptyText: {
        fontSize: 18,
        color: '#AAAAAA',
        marginTop: 20,
        textAlign: 'center',
    },
    listContainer: {
        padding: 10,
    },
    appointmentCard: {
        backgroundColor: '#1E1E1E',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
        flex: 1,
    },
    cardStatus: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    statusText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    cardBody: {
        marginBottom: 10,
    },
    cardDescription: {
        fontSize: 14,
        color: '#CCCCCC',
        marginBottom: 10,
    },
    cardDate: {
        fontSize: 14,
        color: '#CCCCCC',
        marginBottom: 5,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
    },
    actionButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    modalContainer: {
        width: '90%',
        maxHeight: '80%',
        backgroundColor: '#1E1E1E',
        borderRadius: 10,
        padding: 20,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#D4AF37',
        textAlign: 'center',
        marginBottom: 20,
    },
    datePickerContainer: {
        marginBottom: 20,
    },
    datePickerButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#D4AF37',
        borderRadius: 5,
    },
    datePickerText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    modalButton: {
        flex: 1,
        padding: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancelButton: {
        backgroundColor: '#F44336',
        marginRight: 10,
    },
    confirmButton: {
        backgroundColor: '#4CAF50',
        marginLeft: 10,
    },
    modalButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    statusPending: {
        backgroundColor: 'rgba(255, 193, 7, 0.2)',
    },
    statusTextPending: {
        color: '#FFC107',
    },
    statusConfirmed: {
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
    },
    statusTextConfirmed: {
        color: '#4CAF50',
    },
    statusCancelled: {
        backgroundColor: 'rgba(244, 67, 54, 0.2)',
    },
    statusTextCancelled: {
        color: '#F44336',
    },
    statusRescheduled: {
        backgroundColor: 'rgba(33, 150, 243, 0.2)',
    },
    statusTextRescheduled: {
        color: '#2196F3',
    },
});
