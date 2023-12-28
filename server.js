const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs/promises');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to get data based on location
app.get('/api/data/:location', async (req, res) => {
  try {
    const location = req.params.location.toLowerCase();
    const dataFilePath = path.join(__dirname, `${location}.json`);
    
    // Check if the file exists
    try {
      await fs.access(dataFilePath);
    } catch (error) {
      res.status(404).json({ error: 'Data file not found' });
      return;
    }

    const rawData = await fs.readFile(dataFilePath);
    const fullData = JSON.parse(rawData);

    // Extract specific properties from each element
    const extractedData = fullData.map((item) => ({
      City: item.City,
      Date: item.Date,
      'PM2.5': item['PM2.5'],
      PM10: item.PM10,
      NO: item.NO,
      NO2: item.NO2,
      NOx: item.NOx,
      NH3: item.NH3,
      CO: item.CO,
      SO2: item.SO2,
      O3: item.O3,
      AQI: item.AQI,
      AQI_Bucket: item.AQI_Bucket,
    }));

    res.json(extractedData);
  } catch (error) {
    console.error('Error reading data file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});