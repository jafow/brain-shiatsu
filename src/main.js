cracked().sine(1.95).gain({gain:48, modulates:"frequency"}).sine().dac(0.10)
cracked().sine(0.22).gain(100)
  .delay({modulates:"frequency", delay:1}).sine().connect('dac')

cracked().sine({frequency:110, detune:0.33}).connect('dac')

/////////////////////////////////////////////////////////////////////////////////
///Shiatsu Number: 2    /////////////////////////////////////////////////////////
cracked().sine(136).dac().play();
// cracked().loop({steps: 6, interval: 320});

cracked("sine").bind("step", function (data, i, array) { 
    cracked.frequency(array[i] * 18);
    cracked.frequency(array[i] * 111).compressor();
}, [3, 0, 2, 4, 1, 3]);

cracked().loop("start");
