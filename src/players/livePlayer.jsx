/* eslint react/prop-types: 0 */
import React from 'react';
import { connect, JPlayer, Gui, SeekBar,
  Audio, Title, FullScreen, Mute, Play,
  VolumeBar, Duration, CurrentTime, BrowserUnsupported,
 } from 'react-jplayer';

import { isVolumeBarVisible, setMuteIfVolumeVisible } from '../util/muteHoverControl';

const LivePlayer = props => (
  <JPlayer className="jp-sleek">
    <Audio events={props.events} />
    <Gui>
      <div className="jp-controls jp-icon-controls">
        <Play><i className="fa">{/* Icon set in css*/}</i></Play>
        <div className="jp-progress">
          <SeekBar>
            <CurrentTime />
            <Duration />
          </SeekBar>
        </div>
        <div className="jp-volume-container">
          <Mute
            aria-haspopup
            onTouchStart={isVolumeBarVisible}
            onClick={() => setMuteIfVolumeVisible(props.setMute, props.id, props.options.muted)}
          >
            <i className="fa">{/* Icon set in css*/}</i>
          </Mute>
          <div className="jp-volume-slider">
            <div className="jp-volume-bar-container">
              <VolumeBar />
            </div>
          </div>
        </div>
        <FullScreen><i className="fa fa-expand" /></FullScreen>
        <div className="jp-title-container">
          <Title />
        </div>
      </div>
      <BrowserUnsupported />
    </Gui>
  </JPlayer>
);

const options = {
  id: 'LivePlayer',
  keyEnabled: true,
  verticalVolume: true,
  media: {
    title: 'ABC Jazz',
    sources: {
      mp3: 'http://listen.radionomy.com/abc-jazz',
    },
  },
};

export default connect(LivePlayer, options);
