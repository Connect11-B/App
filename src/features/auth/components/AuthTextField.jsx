import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONT_SIZE, LAYOUT, PALETTE, SEMANTIC } from "@shared/constants/theme";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

/**
 *
 * @param {string} label
 * @param {string} value
 * @param {() => void} onChangeText
 * @param {string} placeholder
 * @param {string | boolean} error
 * @param {string} keyboardType
 * @param {style} containerStyle
 * @param {style} inputStyle
 * @param {boolean} editable
 * @param {boolean} secureTextEntry
 * @param {object} restProps
 */
export const AuthTextField = ({
  value,
  label,
  onChangeText,
  placeholder = "",
  error,
  keyboardType = "default",
  containerStyle,
  inputStyle,
  editable = true,
  secureTextEntry = false,
  ...restProps
}) => {
  const progress = useRef(new Animated.Value(value.length > 0 ? 1 : 0)).current;
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(secureTextEntry);

  const currentColor =
    value && error
      ? COLORS.semantic.error
      : value && isFocused
        ? PALETTE.focused
        : value
          ? PALETTE.typed
          : PALETTE.gray[400];

  const labelStyle = {
    transform: [
      {
        translateY: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [15, -15],
        }),
      },
      {
        translateX: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -1],
        }),
      },
    ],
    fontSize: progress.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 14.8],
    }),
  };

  useEffect(() => {
    const animation = Animated.timing(progress, {
      toValue: isFocused || value.length > 0 ? 1 : 0,
      duration: 180,
      useNativeDriver: false,
    });

    animation.start();
    return () => animation.stop();
  }, [isFocused, value, progress]);

  return (
    <View style={[styles.wrapper, containerStyle]}>
      {label ? (
        <Animated.Text style={[styles.label, { color: currentColor }, labelStyle]}>
          {label}
        </Animated.Text>
      ) : null}
      <View
        style={[
          styles.inputContainer,
          {
            borderBottomColor: currentColor,
          },
        ]}
      >
        <TextInput
          style={[
            styles.input,
            {
              color: editable ? currentColor : PALETTE.textDisabled,
            },
            inputStyle,
          ]}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={label && !isFocused ? "" : placeholder}
          placeholderTextColor={PALETTE.placeholder}
          keyboardType={keyboardType}
          autoCapitalize="none"
          autoCorrect={false}
          editable={editable}
          accessibilityLabel={label}
          secureTextEntry={isOpen}
          {...restProps}
        />
        {secureTextEntry ? (
          <Pressable onPress={() => setIsOpen(!isOpen)}>
            <Ionicons
              name={isOpen ? "eye-off-outline" : "eye"}
              size={24}
              color={COLORS.palette.textTertiary}
            />
          </Pressable>
        ) : null}
      </View>
      <View style={styles.error_container}>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    maxWidth: 400,
    marginBottom: LAYOUT.spacing.md,
    position: "relative",
  },
  label: {
    position: "absolute",
    fontSize: FONT_SIZE.sm,
    fontWeight: "600",
    paddingHorizontal: 4,
    pointerEvents: "none",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1.5,
  },
  input: {
    flex: 1,
    height: LAYOUT.inputHeight,
    fontSize: FONT_SIZE.md,
  },
  errorText: {
    position: "absolute",
    color: SEMANTIC.error,
    fontSize: FONT_SIZE.sm,
    marginTop: 2,
  },
});
