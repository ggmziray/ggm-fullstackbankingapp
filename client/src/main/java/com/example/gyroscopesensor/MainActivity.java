package com.example.gyroscopesensor;

import androidx.appcompat.app.AppCompatActivity;

import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.os.Bundle;
import android.widget.TextView;
import android.widget.Toast;
import android.media.MediaPlayer;



public class MainActivity extends AppCompatActivity implements SensorEventListener{
    SensorManager sensorManager;
    Sensor s;
    TextView textView;
    MediaPlayer m;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        textView = findViewById(R.id.value);
        m = MediaPlayer.create (this, R.raw.aswe );


        sensorManager = (SensorManager) getSystemService(this.SENSOR_SERVICE);

        s = sensorManager.getDefaultSensor(Sensor.TYPE_GYROSCOPE);

        if(s != null){
            Toast.makeText(this, "GYROSCOPE Sensor is found ☺", Toast.LENGTH_SHORT).show();
        }else{
            Toast.makeText(this, "GYROSCOPE Sensor is not found!", Toast.LENGTH_SHORT).show();
        }
    }

    @Override
    public void onSensorChanged(SensorEvent sensorEvent) {
        if(sensorEvent.sensor.getType() == Sensor.TYPE_GYROSCOPE){

            int y = (int ) sensorEvent.values[1];
            textView.setText("Y: "+y);

            if( y >= 0) {
                m.start();
            } else {
                m.pause();
            }
            }
        }

        // IMPORTANT : Hi mister abdelziz the app works fine but the y value keeps resetting to 0
                                                      // which starts the song very fast


    @Override
    public void onAccuracyChanged(Sensor sensor, int i) {

    }

    @Override
    protected void onResume() {
        super.onResume();
        sensorManager.registerListener(this, s, SensorManager.SENSOR_DELAY_NORMAL);
    }

    @Override
    protected void onPause() {
        super.onPause();
        sensorManager.unregisterListener(this);
    }
}