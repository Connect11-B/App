import { COLORS, FONT_SIZE, LAYOUT, PALETTE, SEMANTIC } from "@shared/constants/theme";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

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
  ...restProps
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const currentColor = isFocused
    ? PALETTE.focused
    : error
      ? COLORS.semantic.error
      : value
        ? PALETTE.typed
        : PALETTE.gray[500];

  return (
    <View style={[styles.wrapper, containerStyle]}>
      {label ? <Text style={[styles.label, { color: currentColor }]}>{label}</Text> : null}
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
          placeholder={placeholder}
          placeholderTextColor={PALETTE.placeholder}
          keyboardType={keyboardType}
          autoCapitalize="none"
          autoCorrect={false}
          editable={editable}
          {...restProps}
        />
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    maxWidth: 400,
    marginBottom: LAYOUT.spacing.md,
  },
  label: {
    fontSize: FONT_SIZE.sm,
    fontWeight: "600",
    paddingHorizontal: 6,
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
    paddingVertical: 8,
    paddingHorizontal: 2,
  },
  errorText: {
    color: SEMANTIC.error,
    fontSize: FONT_SIZE.xs,
    marginTop: 4,
  },
});
