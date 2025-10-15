package helpers

import (
	"encoding/json"
	"errors"
	"log"
	"net/http"
	"strings"
)

func getRequestBody(r *http.Request, target interface{}) error {
	if r.Header.Get("Content-Type") != "application/json" {
		return errors.New("invalid request content type")
	}

	err := json.NewDecoder(r.Body).Decode(target)
	if err != nil {
		return err
	}

	return nil
}

func respondWithError(w http.ResponseWriter, code int, message string) {
	respondWithJSON(w, code, map[string]string{"error": message})
}

func respondWithJSON(w http.ResponseWriter, code int, payload interface{}) {
	response, _ := json.Marshal(payload)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(code)
	w.Write(response)
}

func getURLParam(r *http.Request, key string) string {
	params := strings.Split(r.URL.RawQuery, "&")
	for _, param := range params {
		parts := strings.Split(param, "=")
		if len(parts) == 2 && parts[0] == key {
			return parts[1]
		}
	}
	return ""
}

func logRequest(r *http.Request) {
	log.Printf("%s %s", r.Method, r.URL)
}