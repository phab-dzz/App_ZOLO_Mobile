import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    // Cập nhật state khi có lỗi
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    // Ghi lại thông tin lỗi vào console hoặc gửi đi
    componentDidCatch(error, info) {
        console.error(error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>Something went wrong!</Text>
                </View>
            );
        }

        return this.props.children;
    }
}

const styles = StyleSheet.create({
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    errorText: {
        fontSize: 18,
        color: 'red',
    },
});

export default ErrorBoundary;
