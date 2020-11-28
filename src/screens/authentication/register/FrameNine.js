import React, { Component } from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RNCamera } from 'react-native-camera';
import { HeaderText, hp } from '../../../components';
import { Button } from '../../../components/Button';
import { frameEight as styles } from './styles';

class FrameNine extends Component {
  state = {
    flashMode: RNCamera.Constants.FlashMode.on,
  };

  handleFlash = async () => {
    const { flashMode } = this.state;
    if (this.camera) {
      const { on, off } = RNCamera.Constants.FlashMode;
      if (flashMode) await this.setState({ flashMode: off });
      else await this.setState({ flashMode: on });
    }
  };

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5 };
      const data = await this.camera.takePictureAsync(options);
      this.setState({ data, captured: true });
    }
  };

  handleRetake = () => {
    this.setState({ captured: false, data: {} });
  };

  render() {
    const { flashMode } = this.state;
    return (
      <View style={styles.background}>
        <KeyboardAwareScrollView>
          <HeaderText
            title="Please take a selfie in a well lit environment"
            style={styles.leadText}
          />
          <View style={styles.camBg}>
            {/* <CameraBorder style={styles.topLeftBorder} />
            <CameraBorder style={styles.topRightBorder} /> */}

            <RNCamera
              ref={(ref) => {
                this.camera = ref;
              }}
              type={RNCamera.Constants.Type.front}
              androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
              androidRecordAudioPermissionOptions={{
                title: 'Permission to use audio recording',
                message: 'We need your permission to use your audio',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
              style={styles.cameraView}
              flashMode={flashMode ? 'on' : 'off'}
            />
            {/* <CameraBorder style={styles.bottomLeftBorder} />
            <CameraBorder style={styles.bottomRightBorder} /> */}
          </View>

          <Divider style={[styles.divider, { marginTop: hp(28) }]} />
          <View style={styles.buttonRow}>
            <Button
              title="From Gallery"
              style={styles.button}
              // disabled={!email.length}
              // onPress={() => proceed()}
            />
            <Button
              title="Skip"
              style={styles.button}
              light
              // disabled={!email.length}
              onPress={() => this.props.proceed()}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default FrameNine;
