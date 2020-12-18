import React, { Component } from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-elements';
import { RNCamera } from 'react-native-camera';
import { Actions } from 'react-native-router-flux';
import { HeaderText, hp } from '../../../../components';
import { Button } from '../../../../components/Button';
import { upload as styles } from '../styles';
import { MainView } from '../../../../components/View';
import BackIcon from '../../../../components/BackIcon';

class Upload extends Component {
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
    const { file } = this.props;
    return (
      <View style={styles.background}>
        <View style={styles.backIconRow}>
          <BackIcon />
          <HeaderText title={`Upload ${file}`} style={styles.leadText} />
        </View>
        <MainView style={styles.mainAccountView}>
          <HeaderText
            title="Please upload a valid means of identification"
            style={styles.headerText}
          />
          <View style={styles.camBg}>
            {/* <CameraBorder style={styles.topLeftBorder} />
            <CameraBorder style={styles.topRightBorder} /> */}

            <RNCamera
              ref={(ref) => {
                this.camera = ref;
              }}
              type={RNCamera.Constants.Type.back}
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
            <Button title="Retry" style={styles.button} light />
            <Button
              title="Continue"
              style={styles.button}
              // disabled={!email.length}
              onPress={() => Actions.pop()}
            />
          </View>
        </MainView>
      </View>
    );
  }
}

export default Upload;
