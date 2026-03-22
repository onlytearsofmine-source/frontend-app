package frontend_app

import (
	"math/rand"
	"time"
)

func getRandomString(length int) string {
	rand.Seed(time.Now().UnixNano())
	letterRunes := []rune("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")
	b := make([]rune, length)
	for i := range b {
		b[i] = letterRunes[rand.Intn(len(letterRunes))]
	}
	return string(b)
}

func getUUID() string {
	return getID(32)
}

func getID(length int) string {
	return getRandomString(length)
}

func getTimestamp() int64 {
	return time.Now().UnixNano() / int64(time.Millisecond)
}