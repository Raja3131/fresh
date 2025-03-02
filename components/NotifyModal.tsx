import React from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";

interface NotifyModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const NotifyModal: React.FC<NotifyModalProps> = ({ visible, onClose, children }) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="bg-white p-6 rounded-2xl w-80 shadow-lg">
          {children}
          <TouchableOpacity onPress={onClose} className="mt-4 bg-primary py-2 rounded-lg">
            <Text className="text-white text-center">OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default NotifyModal;
