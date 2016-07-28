cracked().sine(1.95).gain({gain:48, modulates:"frequency"}).sine().dac(0.10).play()
cracked().sine(0.22).gain(100).delay({modulates:"frequency", delay:1}).sine().connect("dac").play()
cracked().sine({frequency:110, detune:0.33}).dac().play()


