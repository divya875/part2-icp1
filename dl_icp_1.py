# -*- coding: utf-8 -*-
"""DL_ICP_1.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/16KDSPcZY1geGRnIe3Tj6lG3JeCx8lUA5
"""

import pandas
from keras.models import Sequential
from keras.layers.core import Dense, Activation
import warnings
warnings.filterwarnings('ignore')

# Importing the DATASET 
from sklearn.model_selection import train_test_split
import pandas as pd
dataset = pd.read_csv("diabetes.csv", header=None).values

import numpy as np
X_train, X_test, Y_train, Y_test = train_test_split(dataset[:,0:8], dataset[:,8],
                                                    test_size=0.25, random_state=87)
np.random.seed(155)

#Model Creation
tmp = Sequential() 

#Adding Hidden Layers
tmp.add(Dense(40, input_dim=8, activation='relu')) 
tmp.add(Dense(200, input_dim=8, activation='relu')) 
tmp.add(Dense(400, input_dim=8, activation='relu')) 
tmp.add(Dense(75, input_dim=8, activation='relu')) 

# output
tmp.add(Dense(1, activation='sigmoid')) 
tmp.compile(loss='binary_crossentropy', optimizer='adam')
tmp_fitted = tmp.fit(X_train, Y_train, epochs=100, verbose=0,
                                     initial_epoch=0)
print(tmp.summary())
print(tmp.evaluate(X_test, Y_test, verbose=0))