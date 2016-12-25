var envelope = {
  'attack': 0.1,
  'decay': 0.2,
  'release': 3.5
}

var syn = new Tone.MonoSynth({
  'oscillator': {
    'type': 'triangle'
  },
  envelope,
  'filterEnvelope': {
    'attack': 0,
    'decay': 0,
    'release': 100,
    'baseFrequency': 128,
    'octaves': 2
  },
})

var syn1 = new Tone.Synth({
  'oscillator': {
    'type': 'sine'
  },
  envelope
})

syn.toMaster()
syn1.toMaster()
syn.triggerAttackRelease('B4', '2s')
syn.triggerAttackRelease('B2', '2s')

